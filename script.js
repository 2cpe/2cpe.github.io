document.addEventListener('DOMContentLoaded', function() {
    // Check if QR Code library is loaded
    if (typeof QRCode === 'undefined') {
        console.error('QR Code library not loaded!');
        document.getElementById('status-message').innerHTML = 'Error: QR Code generator failed to load';
        document.getElementById('status-message').className = 'error';
        return;
    }

    // Add this at the start of your script
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

    // Use it before accessing localStorage
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

    // Generate a unique invitation code
    function generateInvitationCode() {
        const deviceId = generateDeviceId();
        const timestamp = new Date().getTime();
        return btoa(`${deviceId}-${timestamp}`);
    }

    // Check if this device has already accessed the invitation
    function checkDeviceAccess() {
        const deviceId = generateDeviceId();
        const accessed = localStorage.getItem('wedding_invitation_accessed');
        
        if (accessed) {
            document.getElementById('status-message').innerHTML = 'This invitation has already been used on this device.';
            document.getElementById('status-message').className = 'error';
            return false;
        }
        
        localStorage.setItem('wedding_invitation_accessed', deviceId);
        return true;
    }

    // Generate QR Code
    function generateQRCode() {
        const qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = `
            <div class="welcome-message">
                <h3>Welcome to Our Wedding!</h3>
                <p>Please enter your name and confirm your attendance.</p>
            </div>
        `;
    }

    // Generate QR code when page loads
    generateQRCode();

    // Initialize or load guests from localStorage
    let guests = JSON.parse(localStorage.getItem('wedding_guests') || '[]');

    // Function to update guest list display
    function updateGuestList() {
        const guestsList = document.getElementById('attendeesList');
        guestsList.innerHTML = '';
        
        guests.forEach(guest => {
            const guestElement = document.createElement('div');
            guestElement.className = `guest-item ${guest.attending ? 'guest-attending' : 'guest-not-attending'}`;
            guestElement.innerHTML = `
                <span>${guest.name}</span>
                <span class="status-icon">${guest.attending ? '✓' : '✗'}</span>
            `;
            guestsList.appendChild(guestElement);
        });
    }

    // Load saved response for this device
    function loadSavedResponse() {
        const deviceId = generateDeviceId();
        const savedResponse = localStorage.getItem('wedding_response');
        
        if (savedResponse) {
            const response = JSON.parse(savedResponse);
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

    function hideAttendanceForm() {
        const form = document.querySelector('.attendance-form');
        if (form) {
            form.style.display = 'none';
        }
    }

    // Add this function to create moving verification element
    function addMovingVerification(wrapper) {
        const verifier = document.createElement('div');
        verifier.className = 'qr-verifier';
        
        // Add timestamp that updates every second
        const timeStamp = document.createElement('div');
        timeStamp.className = 'time-stamp';
        verifier.appendChild(timeStamp);
        
        wrapper.appendChild(verifier);

        // Update timestamp every second
        function updateTimeStamp() {
            const now = new Date();
            const time = now.toLocaleTimeString();
            timeStamp.textContent = time;
        }
        
        updateTimeStamp();
        setInterval(updateTimeStamp, 1000);

        // Random movement animation
        function moveVerifier() {
            const positions = [
                { top: '10%', left: '10%' },
                { top: '10%', right: '10%' },
                { top: '90%', left: '10%' },
                { top: '90%', right: '10%' }
            ];
            
            let lastPos = 0;
            
            setInterval(() => {
                let newPos;
                do {
                    newPos = Math.floor(Math.random() * positions.length);
                } while (newPos === lastPos);
                
                lastPos = newPos;
                Object.assign(verifier.style, positions[newPos]);
            }, 2000);
        }
        
        moveVerifier();
    }

    // Update showQRCode function
    function showQRCode(name) {
        const qrcodeContainer = document.getElementById('qrcode');
        const mapsUrl = `https://maps.app.goo.gl/mh4weC8nMm2AR54f9?guest=${encodeURIComponent(name)}`;
        
        qrcodeContainer.innerHTML = '';
        
        try {
            // Create main wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'qr-wrapper';
            
            // Add animated border
            const borderAnimation = document.createElement('div');
            borderAnimation.className = 'border-animation';
            const movingBorder = document.createElement('div');
            movingBorder.className = 'moving-border';
            borderAnimation.appendChild(movingBorder);
            wrapper.appendChild(borderAnimation);
            
            // Create QR code container
            const qrDiv = document.createElement('div');
            qrDiv.className = 'qr-code';
            wrapper.appendChild(qrDiv);

            // Generate QR code
            new QRCode(qrDiv, {
                text: mapsUrl,
                width: 240,
                height: 240,
                colorDark: "#2c3e50",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H,
                margin: 2
            });

            // Add name overlay
            const nameOverlay = document.createElement('div');
            nameOverlay.className = 'name-overlay';
            const formattedName = name.trim().toLowerCase();
            nameOverlay.innerHTML = `<span>${formattedName}</span>`;
            wrapper.appendChild(nameOverlay);
            
            qrcodeContainer.appendChild(wrapper);

            document.getElementById('status-message').innerHTML = 
                `<div class="success-message">
                    <h3>🎉 Welcome back, ${name}!</h3>
                    <p>Your QR code for the venue location is ready.</p>
                </div>`;
        } catch (error) {
            console.error('QR Code generation failed:', error);
        }
    }

    function showDeclineMessage(name) {
        const qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = `
            <div class="decline-message">
                <div class="decline-icon">💌</div>
                <h3>Hello again, ${name}</h3>
                <p>As previously noted, you won't be able to attend.</p>
                <p>We appreciate your response.</p>
            </div>
        `;
    }

    // Update handleAttendance function
    function handleAttendance(name, isAttending) {
        if (!name.trim()) {
            alert('Please enter your name');
            return;
        }

        // Save response to localStorage
        const response = {
            name: name,
            attending: isAttending,
            deviceId: generateDeviceId(),
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('wedding_response', JSON.stringify(response));

        // Update display based on response
        if (isAttending) {
            showQRCode(name);
        } else {
            showDeclineMessage(name);
        }

        // Hide the form after response
        hideAttendanceForm();
    }

    // Initialize page
    if (!loadSavedResponse()) {
        // Only show welcome message if no saved response
        const qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = `
            <div class="welcome-message">
                <h3>Welcome to Our Wedding!</h3>
                <p>Please enter your name and confirm your attendance.</p>
            </div>
        `;
    }

    // Add event listeners
    document.getElementById('confirmYes').addEventListener('click', () => {
        const name = document.getElementById('guestName').value;
        handleAttendance(name, true);
    });

    document.getElementById('confirmNo').addEventListener('click', () => {
        const name = document.getElementById('guestName').value;
        handleAttendance(name, false);
    });

    // Update reset functionality
    document.getElementById('resetButton').addEventListener('click', function() {
        if (confirm('Are you sure you want to reset? This will clear your response.')) {
            try {
                localStorage.removeItem('wedding_response');
                localStorage.removeItem('wedding_guests');
                document.getElementById('status-message').innerHTML = 'Reset successful. Reloading...';
                document.getElementById('status-message').className = 'success';
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } catch (error) {
                console.error('Reset failed:', error);
                document.getElementById('status-message').innerHTML = 'Reset failed. Please try again.';
                document.getElementById('status-message').className = 'error';
            }
        }
    });

    // Initial guest list update
    updateGuestList();

    // Update the preventScreenCapture function
    function preventScreenCapture() {
        // Add warning element to body
        const warningElement = document.createElement('div');
        warningElement.className = 'screenshot-warning';
        warningElement.innerHTML = '<div class="warning-text">Screenshot Detected!</div>';
        document.body.appendChild(warningElement);

        // Function to show warning
        function showWarning() {
            warningElement.classList.add('active');
            setTimeout(() => {
                warningElement.classList.remove('active');
            }, 1000); // Warning shows for 1 second
        }

        // Detect screenshot attempts
        document.addEventListener('keydown', function(e) {
            if (
                (e.ctrlKey && (e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S' || e.key === 'c' || e.key === 'C')) ||
                (e.metaKey && (e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S' || e.key === 'c' || e.key === 'C')) ||
                e.key === 'PrintScreen' ||
                e.key === 'F12'
            ) {
                e.preventDefault();
                showWarning();
                return false;
            }
        });

        // Show warning on visibility change
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                showWarning();
            }
        });

        // Show warning on blur
        window.addEventListener('blur', function() {
            showWarning();
        });

        // Prevent right-click
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            showWarning();
            return false;
        });
    }

    // Call prevention function
    preventScreenCapture();

    // Add this to your existing script.js
    function enhancedScreenshotPrevention() {
        // Create secure video element as screenshot detector
        const secureVideo = document.createElement('video');
        secureVideo.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0.01;';
        secureVideo.playsInline = true;
        secureVideo.autoplay = true;
        secureVideo.muted = true;
        
        // Add protected content class
        document.querySelector('.invitation-card').classList.add('protected-content');

        // Enhanced screenshot detection
        const detectScreenshot = () => {
            const protectedContent = document.querySelector('.protected-content');
            protectedContent.classList.add('screenshot-protected');
            
            // Show warning
            const warningElement = document.createElement('div');
            warningElement.className = 'screenshot-warning active';
            warningElement.innerHTML = `
                <div class="warning-content">
                    <div class="warning-icon">🚫</div>
                    <div class="warning-text">Screenshot Blocked</div>
                    <div class="warning-subtext">For security reasons, screenshots are not allowed.</div>
                </div>
            `;
            document.body.appendChild(warningElement);

            // Remove warning after delay
            setTimeout(() => {
                warningElement.remove();
                protectedContent.classList.remove('screenshot-protected');
            }, 2000);
        };

        // Multiple detection methods
        const preventMethods = {
            // iOS detection
            ios: () => {
                window.addEventListener('focusout', detectScreenshot);
                window.addEventListener('resize', detectScreenshot);
            },
            
            // Android detection
            android: () => {
                if ('mediaSession' in navigator) {
                    navigator.mediaSession.setActionHandler('previoustrack', detectScreenshot);
                    navigator.mediaSession.setActionHandler('nexttrack', detectScreenshot);
                }
            },
            
            // Desktop detection
            desktop: () => {
                document.addEventListener('keydown', (e) => {
                    if (
                        (e.key === 'PrintScreen') ||
                        (e.ctrlKey && (e.key === 'p' || e.key === 'P')) ||
                        (e.metaKey && (e.key === 'p' || e.key === 'P')) ||
                        (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) ||
                        (e.ctrlKey && e.shiftKey && (e.key === 'c' || e.key === 'C')) ||
                        e.key === 'F12'
                    ) {
                        e.preventDefault();
                        detectScreenshot();
                    }
                });
            }
        };

        // Apply all prevention methods
        Object.values(preventMethods).forEach(method => method());

        // Additional protection layers
        document.addEventListener('contextmenu', e => {
            e.preventDefault();
            detectScreenshot();
        });

        // Detect developer tools
        let devToolsTimeout;
        const detectDevTools = () => {
            const widthThreshold = window.outerWidth - window.innerWidth > 160;
            const heightThreshold = window.outerHeight - window.innerHeight > 160;
            
            if (widthThreshold || heightThreshold) {
                detectScreenshot();
            }
        };

        window.addEventListener('resize', () => {
            clearTimeout(devToolsTimeout);
            devToolsTimeout = setTimeout(detectDevTools, 100);
        });
    }

    // Call the enhanced prevention
    enhancedScreenshotPrevention();
}); 