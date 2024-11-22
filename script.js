document.addEventListener('DOMContentLoaded', function() {
    // Check if QR Code library is loaded
    if (typeof QRCode === 'undefined') {
        console.error('QR Code library not loaded!');
        document.getElementById('status-message').innerHTML = 'Error: QR Code generator failed to load';
        document.getElementById('status-message').className = 'error';
        return;
    }

    // Check localStorage availability
    function isLocalStorageAvailable() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch(e) {
            document.getElementById('status-message').innerHTML = 'Error: Local storage not available. Please enable cookies.';
            document.getElementById('status-message').className = 'error';
            return false;
        }
    }

    if (!isLocalStorageAvailable()) {
        console.error('localStorage not available');
        return;
    }

    // Generate a unique identifier for the device
    function generateDeviceId() {
        const navigator_info = window.navigator.userAgent + window.navigator.platform;
        const screen_info = window.screen.height + '' + window.screen.width + window.screen.colorDepth;
        return btoa(navigator_info + screen_info);
    }

    // Generate QR Code
    function generateQRCode() {
        const qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.style.display = 'none';
    }

    // Hide attendance form
    function hideAttendanceForm() {
        const form = document.querySelector('.attendance-form');
        if (form) {
            form.style.display = 'none';
        }
    }

    // Show QR code
    function showQRCode(name) {
        const qrcodeContainer = document.getElementById('qrcode');
        const mapsUrl = `https://maps.app.goo.gl/mh4weC8nMm2AR54f9?guest=${encodeURIComponent(name)}`;
        
        qrcodeContainer.innerHTML = '';
        qrcodeContainer.style.display = 'block';
        
        try {
            // Hide elements after voting
            const namesSection = document.querySelector('.names-section');
            const arabicText = document.querySelector('.arabic-text');
            const footerText = document.querySelector('.footer-text');
            
            if (namesSection) namesSection.style.display = 'none';
            if (arabicText) arabicText.style.display = 'none';
            if (footerText) footerText.style.display = 'none';

            // Create and show welcome box
            const overlay = document.createElement('div');
            overlay.className = 'welcome-box-overlay';
            
            const welcomeBox = document.createElement('div');
            welcomeBox.className = 'welcome-box';
            welcomeBox.innerHTML = `
                <span class="emoji">🎉</span>
                <h3>مرحباً بك، ${name}</h3>
                <p>رمز QR الخاص بموقع المناسبة جاهز</p>
                <button class="welcome-box-button">حسناً</button>
            `;
            
            document.body.appendChild(overlay);
            document.body.appendChild(welcomeBox);
            
            // Handle close button
            const closeButton = welcomeBox.querySelector('.welcome-box-button');
            closeButton.addEventListener('click', () => {
                overlay.remove();
                welcomeBox.remove();
                
                // Generate QR code after closing welcome message
                const wrapper = document.createElement('div');
                wrapper.className = 'qr-wrapper';
                
                const qrDiv = document.createElement('div');
                qrDiv.className = 'qr-code';
                wrapper.appendChild(qrDiv);

                new QRCode(qrDiv, {
                    text: mapsUrl,
                    width: 240,
                    height: 240,
                    colorDark: "#2c3e50",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.H,
                    margin: 2
                });

                const nameOverlay = document.createElement('div');
                nameOverlay.className = 'name-overlay';
                nameOverlay.innerHTML = `<span>${name}</span>`;
                wrapper.appendChild(nameOverlay);
                
                const borderAnimation = document.createElement('div');
                borderAnimation.className = 'border-animation';
                const movingBorder = document.createElement('div');
                movingBorder.className = 'moving-border';
                borderAnimation.appendChild(movingBorder);
                wrapper.appendChild(borderAnimation);
                
                qrcodeContainer.appendChild(wrapper);

                // Show location button
                const locationSection = document.querySelector('.location-section');
                if (locationSection) {
                    locationSection.style.display = 'block';
                    const locationBtn = locationSection.querySelector('.location-btn');
                    if (locationBtn) {
                        locationBtn.onclick = () => window.open(mapsUrl, '_blank');
                    }
                }
            });

        } catch (error) {
            console.error('QR Code generation failed:', error);
        }
    }

    // Show decline message
    function showDeclineMessage(name) {
        const qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.style.display = 'none';

        document.getElementById('status-message').innerHTML = `
            <div class="decline-message">
                <div class="decline-icon">💌</div>
                <h3>نأسف لعدم تمكنك من الحضور</h3>
                <p>شكراً لإخبارنا</p>
            </div>
        `;

        const locationSection = document.querySelector('.location-section');
        if (locationSection) {
            locationSection.style.display = 'none';
        }

        const footerText = document.querySelector('.footer-text');
        if (footerText) {
            footerText.style.display = 'none';
        }
    }

    // Handle attendance
    function handleAttendance(name, isAttending) {
        if (!name.trim()) {
            alert('Please enter your name');
            return;
        }

        const response = {
            name: name,
            attending: isAttending,
            deviceId: generateDeviceId(),
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('wedding_response', JSON.stringify(response));

        if (isAttending) {
            showQRCode(name);
        } else {
            showDeclineMessage(name);
        }

        hideAttendanceForm();
    }

    // Load saved response
    function loadSavedResponse() {
        const savedResponse = localStorage.getItem('wedding_response');
        
        if (savedResponse) {
            const response = JSON.parse(savedResponse);
            
            const namesSection = document.querySelector('.names-section');
            const arabicText = document.querySelector('.arabic-text');
            const footerText = document.querySelector('.footer-text');
            
            if (namesSection) namesSection.style.display = 'none';
            if (arabicText) arabicText.style.display = 'none';
            if (footerText) footerText.style.display = 'none';

            if (response.attending) {
                showQRCode(response.name);
                hideAttendanceForm();
            } else {
                showDeclineMessage(response.name);
                hideAttendanceForm();
            }
            return true;
        }
        return false;
    }

    // Initialize
    if (!loadSavedResponse()) {
        const qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.style.display = 'none';
    }

    // Event Listeners
    document.getElementById('confirmYes').addEventListener('click', () => {
        const name = document.getElementById('guestName').value;
        handleAttendance(name, true);
    });

    document.getElementById('confirmNo').addEventListener('click', () => {
        const name = document.getElementById('guestName').value;
        handleAttendance(name, false);
    });

    // Reset Button
    const resetButton = document.getElementById('resetButton');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            if (confirm('هل أنت متأكد من إعادة التعيين؟ سيؤدي هذا إلى مسح استجابتك.')) {
                try {
                    localStorage.removeItem('wedding_response');
                    localStorage.removeItem('wedding_invitation_accessed');
                    document.getElementById('status-message').innerHTML = 'تم إعادة التعيين بنجاح. جاري إعادة التحميل...';
                    document.getElementById('status-message').className = 'success';
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } catch (error) {
                    console.error('Reset failed:', error);
                    document.getElementById('status-message').innerHTML = 'فشلت إعادة التعيين. حاول مرة أخرى.';
                    document.getElementById('status-message').className = 'error';
                }
            }
        });
    }

    // Initially hide location section
    const locationSection = document.querySelector('.location-section');
    if (locationSection) {
        locationSection.style.display = 'none';
    }
}); 