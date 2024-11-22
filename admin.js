document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const mainMenu = document.getElementById('mainMenu');
    const scannerSection = document.getElementById('scannerSection');
    const deviceListSection = document.getElementById('deviceListSection');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Admin credentials
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'admin123';

    // Store scanned devices
    let scannedDevices = JSON.parse(localStorage.getItem('scanned_devices') || '[]');
    let html5QrcodeScanner;

    // Check if already logged in
    if (sessionStorage.getItem('adminLoggedIn')) {
        showMainMenu();
    }

    // Login handler
    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            sessionStorage.setItem('adminLoggedIn', 'true');
            showMainMenu();
        } else {
            alert('اسم المستخدم أو كلمة المرور غير صحيحة');
        }
    });

    // Logout handler
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('adminLoggedIn');
        loginForm.style.display = 'block';
        mainMenu.style.display = 'none';
        scannerSection.style.display = 'none';
        deviceListSection.style.display = 'none';
        logoutBtn.style.display = 'none';
        if (html5QrcodeScanner) {
            html5QrcodeScanner.clear();
        }
    });

    function showMainMenu() {
        loginForm.style.display = 'none';
        mainMenu.style.display = 'block';
        scannerSection.style.display = 'none';
        deviceListSection.style.display = 'none';
        logoutBtn.style.display = 'block';
    }

    // Add to global scope for onclick handlers
    window.showSection = async function(sectionId) {
        // Hide all sections
        loginForm.style.display = 'none';
        mainMenu.style.display = 'none';
        scannerSection.style.display = 'none';
        deviceListSection.style.display = 'none';

        // Show requested section
        document.getElementById(sectionId).style.display = 'block';
        logoutBtn.style.display = 'block';

        if (sectionId === 'scannerSection') {
            await initializeCamera();
        } else if (sectionId === 'deviceListSection') {
            showTab('created');
            updateDeviceList();
        }
    };

    // Add this function to handle camera initialization
    async function initializeCamera() {
        const scanResult = document.getElementById('scanResult');
        try {
            // First check if getUserMedia is supported
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error('كاميرا الويب غير مدعومة في هذا المتصفح');
            }

            // Request camera permission explicitly first
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: true  // Simplified video constraints
            });
            
            // Stop the test stream
            stream.getTracks().forEach(track => track.stop());
            
            // If we got here, we have permission. Now initialize the scanner
            if (html5QrcodeScanner) {
                html5QrcodeScanner.clear();
            }

            html5QrcodeScanner = new Html5QrcodeScanner(
                "reader",
                { 
                    fps: 10,
                    qrbox: 250,  // Simplified qrbox configuration
                    rememberLastUsedCamera: true,
                    // Remove other complex configurations
                }
            );

            html5QrcodeScanner.render(onScanSuccess, onScanFailure);

        } catch (err) {
            let errorMessage = '';
            
            if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                errorMessage = `
                    <div class="error-scan">
                        <h3>تم رفض الوصول للكاميرا</h3>
                        <p>يرجى السماح بالوصول للكاميرا من خلال:</p>
                        <ol style="text-align: right; margin: 10px 20px;">
                            <li>انقر على أيقونة القفل/الكاميرا في شريط العنوان</li>
                            <li>اختر "السماح" للوصول إلى الكاميرا</li>
                            <li>قم بتحديث الصفحة وحاول مرة أخرى</li>
                        </ol>
                        <button onclick="window.location.reload()" class="admin-btn" style="margin-top: 15px;">
                            تحديث الصفحة
                        </button>
                    </div>
                `;
            } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
                errorMessage = `
                    <div class="error-scan">
                        <h3>لم يتم العثور على كاميرا</h3>
                        <p>تأكد من توصيل كاميرا بجهازك وأنها تعمل بشكل صحيح</p>
                    </div>
                `;
            } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
                errorMessage = `
                    <div class="error-scan">
                        <h3>الكاميرا قيد الاستخدام</h3>
                        <p>يرجى إغلاق أي تطبيقات أخرى تستخدم الكاميرا وإعادة المحاولة</p>
                        <button onclick="window.location.reload()" class="admin-btn" style="margin-top: 15px;">
                            إعادة المحاولة
                        </button>
                    </div>
                `;
            } else {
                errorMessage = `
                    <div class="error-scan">
                        <h3>حدث خطأ غير متوقع</h3>
                        <p>${err.message}</p>
                        <button onclick="window.location.reload()" class="admin-btn" style="margin-top: 15px;">
                            إعادة المحاولة
                        </button>
                    </div>
                `;
            }
            
            scanResult.innerHTML = errorMessage;
            console.error('Camera initialization failed:', err);
        }
    }

    // Update the initializeScanner function to use the new camera initialization
    function initializeScanner() {
        initializeCamera().catch(err => {
            const scanResult = document.getElementById('scanResult');
            scanResult.innerHTML = `
                <div class="error-scan">
                    <h3>فشل في تهيئة الماسح الضوئي</h3>
                    <p>${err.message}</p>
                    <button onclick="window.location.reload()" class="admin-btn" style="margin-top: 15px;">
                        إعادة المحاولة
                    </button>
                </div>
            `;
        });
    }

    function onScanSuccess(decodedText, decodedResult) {
        try {
            const qrData = JSON.parse(decodedText);
            const scanResult = document.getElementById('scanResult');
            
            // Get device ID and code from QR
            const deviceId = qrData.d;
            const code = qrData.c;
            
            // Find the guest info from stored data
            const createdDevices = JSON.parse(localStorage.getItem('qr_data_list') || '[]');
            const guestData = createdDevices.find(d => d.deviceId === deviceId);
            
            if (!guestData) {
                scanResult.innerHTML = '<div class="error-scan">رمز QR غير صالح</div>';
                return;
            }
            
            // Check if device is already scanned
            const existingDevice = scannedDevices.find(d => d.deviceId === deviceId);
            
            if (existingDevice) {
                scanResult.innerHTML = `
                    <div class="error-scan">
                        <h3>تم المسح مسبقاً</h3>
                        <p>تم مسح هذا الرمز من قبل</p>
                        <div class="device-info">
                            <p>رقم الجهاز: ${code}</p>
                            <p>اسم الضيف: ${guestData.guest}</p>
                            <p>وقت المسح السابق: ${new Date(existingDevice.scannedAt).toLocaleString('ar-SA')}</p>
                        </div>
                    </div>
                `;
            } else {
                // Add to scanned devices
                scannedDevices.push({
                    deviceId: deviceId,
                    code: code,
                    guest: guestData.guest,
                    scannedAt: new Date().toISOString()
                });
                localStorage.setItem('scanned_devices', JSON.stringify(scannedDevices));
                
                scanResult.innerHTML = `
                    <div class="success-scan">
                        <h3>تشرفنا بحضوركم</h3>
                        <p>مرحباً بك، ${guestData.guest}</p>
                        <div class="thank-you-message">شكراً لحضورك الحفل</div>
                        <div class="device-info">
                            <p>رقم الجهاز: ${code}</p>
                        </div>
                        <div class="timestamp">
                            ${new Date().toLocaleString('ar-SA')}
                        </div>
                    </div>
                `;
                updateDeviceList();
            }
        } catch (error) {
            document.getElementById('scanResult').innerHTML = '<div class="error-scan">رمز QR غير صالح</div>';
        }
    }

    function updateDeviceList() {
        const createdDevices = JSON.parse(localStorage.getItem('qr_data_list') || '[]');
        const scannedDevices = JSON.parse(localStorage.getItem('scanned_devices') || '[]');
        const allResponses = JSON.parse(localStorage.getItem('wedding_responses') || '[]');
        const declinedGuests = allResponses.filter(r => !r.attending);

        // Update counts
        document.getElementById('createdCount').textContent = createdDevices.length;
        document.getElementById('scannedCount').textContent = scannedDevices.length;
        document.getElementById('declinedCount').textContent = declinedGuests.length;

        // Update Created QR Codes List
        const createdListContainer = document.getElementById('createdQRList');
        if (createdListContainer) {
            let createdHtml = '';
            if (createdDevices.length === 0) {
                createdHtml = '<p class="empty-message">لا توجد دعوات منشأة</p>';
            } else {
                createdHtml = '<ul class="device-list">';
                createdDevices.forEach(device => {
                    const scannedDevice = scannedDevices.find(d => d.deviceId === device.deviceId);
                    createdHtml += `
                        <li class="device-item">
                            <div class="device-details">
                                <p>الضيف: ${device.guest}</p>
                                <p>رقم الجهاز: ${device.code}</p>
                                <p>وق�� إنشاء QR Code: ${new Date(device.timestamp).toLocaleString('ar-SA')}</p>
                                ${scannedDevice ? 
                                    `<p>وقت الدخول للموقع: ${new Date(scannedDevice.scannedAt).toLocaleString('ar-SA')}</p>` 
                                    : ''
                                }
                                <p class="status-tag ${scannedDevice ? 'status-attended' : 'status-pending'}">
                                    ${scannedDevice ? '✓ تم الحضور' : '⏳ في الانتظار'}
                                </p>
                            </div>
                            <button onclick="resetCreatedDevice('${device.deviceId}')" class="reset-device-btn">
                                إعادة تعيين
                            </button>
                        </li>
                    `;
                });
                createdHtml += '</ul>';
            }
            createdListContainer.innerHTML = createdHtml;
        }

        // Update Scanned Devices List
        const scannedListContainer = document.getElementById('scannedDeviceList');
        if (scannedListContainer) {
            let scannedHtml = '';
            if (scannedDevices.length === 0) {
                scannedHtml = '<p class="empty-message">لا يوجد ضيوف تم مسح QR Code الخاص بهم</p>';
            } else {
                scannedHtml = '<ul class="device-list">';
                scannedDevices.forEach(device => {
                    const createdDevice = createdDevices.find(d => d.deviceId === device.deviceId);
                    scannedHtml += `
                        <li class="device-item">
                            <div class="device-details">
                                <p>الضيف: ${device.guest}</p>
                                <p>رقم الجهاز: ${device.code}</p>
                                <p>وقت إنشاء QR Code: ${createdDevice ? new Date(createdDevice.timestamp).toLocaleString('ar-SA') : 'غير متوفر'}</p>
                                <p>وقت الحضور: ${new Date(device.scannedAt).toLocaleString('ar-SA')}</p>
                                <p class="status-tag status-attended">✓ تم الحضور</p>
                            </div>
                            <button onclick="resetScannedDevice('${device.deviceId}')" class="reset-device-btn">
                                إعادة تعيين
                            </button>
                        </li>
                    `;
                });
                scannedHtml += '</ul>';
            }
            scannedListContainer.innerHTML = scannedHtml;
        }

        // Update Declined Guests List
        const declinedListContainer = document.getElementById('declinedList');
        if (declinedListContainer) {
            let declinedHtml = '';
            if (declinedGuests.length === 0) {
                declinedHtml = '<p class="empty-message">لا يوجد ضيوف اعتذروا عن الحضور</p>';
            } else {
                declinedHtml = '<ul class="device-list">';
                declinedGuests.forEach(guest => {
                    declinedHtml += `
                        <li class="device-item">
                            <div class="device-details">
                                <p>الضيف: ${guest.name}</p>
                                <p>وقت الاعتذار: ${new Date(guest.timestamp).toLocaleString('ar-SA')}</p>
                                <p class="status-tag status-declined">✗ اعتذر عن الحضور</p>
                            </div>
                            <button onclick="resetDeclinedGuest('${guest.deviceId}')" class="reset-device-btn">
                                إعادة تعيين
                            </button>
                        </li>
                    `;
                });
                declinedHtml += '</ul>';
            }
            declinedListContainer.innerHTML = declinedHtml;
        }
    }

    // Update the reset functions
    window.resetCreatedDevice = function(deviceId) {
        const resetAlert = document.querySelector('.device-reset-alert');
        const resetOverlay = document.querySelector('.device-reset-overlay');
        const confirmBtn = resetAlert.querySelector('.confirm');
        const cancelBtn = resetAlert.querySelector('.cancel');
        
        resetAlert.style.display = 'block';
        resetOverlay.style.display = 'block';
        
        confirmBtn.onclick = function() {
            // Remove from QR data list
            let qrDevices = JSON.parse(localStorage.getItem('qr_data_list') || '[]');
            qrDevices = qrDevices.filter(d => d.deviceId !== deviceId);
            localStorage.setItem('qr_data_list', JSON.stringify(qrDevices));

            // Remove from wedding response
            const response = JSON.parse(localStorage.getItem('wedding_response') || '{}');
            if (response.deviceId === deviceId) {
                localStorage.removeItem('wedding_response');
            }

            // Remove from scanned devices if exists
            let scannedDevices = JSON.parse(localStorage.getItem('scanned_devices') || '[]');
            scannedDevices = scannedDevices.filter(d => d.deviceId !== deviceId);
            localStorage.setItem('scanned_devices', JSON.stringify(scannedDevices));

            updateDeviceList();
            resetAlert.style.display = 'none';
            resetOverlay.style.display = 'none';
        };
        
        cancelBtn.onclick = function() {
            resetAlert.style.display = 'none';
            resetOverlay.style.display = 'none';
        };
        
        resetOverlay.onclick = function() {
            resetAlert.style.display = 'none';
            resetOverlay.style.display = 'none';
        };
    };

    window.resetScannedDevice = function(deviceId) {
        const resetAlert = document.querySelector('.device-reset-alert');
        const resetOverlay = document.querySelector('.device-reset-overlay');
        const confirmBtn = resetAlert.querySelector('.confirm');
        const cancelBtn = resetAlert.querySelector('.cancel');
        
        resetAlert.style.display = 'block';
        resetOverlay.style.display = 'block';
        
        confirmBtn.onclick = function() {
            // Remove from scanned devices
            let scannedDevices = JSON.parse(localStorage.getItem('scanned_devices') || '[]');
            scannedDevices = scannedDevices.filter(d => d.deviceId !== deviceId);
            localStorage.setItem('scanned_devices', JSON.stringify(scannedDevices));

            updateDeviceList();
            resetAlert.style.display = 'none';
            resetOverlay.style.display = 'none';
        };
        
        cancelBtn.onclick = function() {
            resetAlert.style.display = 'none';
            resetOverlay.style.display = 'none';
        };
        
        resetOverlay.onclick = function() {
            resetAlert.style.display = 'none';
            resetOverlay.style.display = 'none';
        };
    };

    window.resetDeclinedGuest = function(deviceId) {
        const resetAlert = document.querySelector('.device-reset-alert');
        const resetOverlay = document.querySelector('.device-reset-overlay');
        const confirmBtn = resetAlert.querySelector('.confirm');
        const cancelBtn = resetAlert.querySelector('.cancel');
        
        resetAlert.style.display = 'block';
        resetOverlay.style.display = 'block';
        
        confirmBtn.onclick = function() {
            // Remove from wedding responses
            let responses = JSON.parse(localStorage.getItem('wedding_responses') || '[]');
            responses = responses.filter(r => r.deviceId !== deviceId);
            localStorage.setItem('wedding_responses', JSON.stringify(responses));

            // Remove individual response
            const response = JSON.parse(localStorage.getItem('wedding_response') || '{}');
            if (response.deviceId === deviceId) {
                localStorage.removeItem('wedding_response');
            }

            updateDeviceList();
            resetAlert.style.display = 'none';
            resetOverlay.style.display = 'none';
        };
        
        cancelBtn.onclick = function() {
            resetAlert.style.display = 'none';
            resetOverlay.style.display = 'none';
        };
        
        resetOverlay.onclick = function() {
            resetAlert.style.display = 'none';
            resetOverlay.style.display = 'none';
        };
    };

    function onScanFailure(error) {
        // Only show errors that aren't related to normal scanning process
        if (error && !error.includes("No QR code found")) {
            const scanResult = document.getElementById('scanResult');
            scanResult.innerHTML = `
                <div class="error-scan">
                    <h3>خطأ في المسح</h3>
                    <p>${error}</p>
                </div>
            `;
        }
    }

    // Add auto-refresh every 30 seconds when device list section is visible
    setInterval(() => {
        if (deviceListSection.style.display === 'block') {
            updateDeviceList();
        }
    }, 30000);

    // Add this function
    window.resetAllData = function() {
        const resetAlert = document.querySelector('.dev-reset-alert');
        const resetOverlay = document.querySelector('.device-reset-overlay');
        const confirmBtn = resetAlert.querySelector('.confirm');
        const cancelBtn = resetAlert.querySelector('.cancel');
        
        resetAlert.style.display = 'block';
        resetOverlay.style.display = 'block';
        
        confirmBtn.onclick = function() {
            try {
                // Clear all stored data
                localStorage.removeItem('qr_data_list');
                localStorage.removeItem('scanned_devices');
                localStorage.removeItem('wedding_responses');
                localStorage.removeItem('wedding_response');
                localStorage.removeItem('wedding_invitation_accessed');
                
                // Update the display
                updateDeviceList();
                
                // Show success message
                alert('تم إعادة تعيين جميع البيانات بنجاح');
                
                resetAlert.style.display = 'none';
                resetOverlay.style.display = 'none';
            } catch (error) {
                console.error('Reset failed:', error);
                alert('فشلت عملية إعادة التعيين');
            }
        };
        
        cancelBtn.onclick = function() {
            resetAlert.style.display = 'none';
            resetOverlay.style.display = 'none';
        };
        
        resetOverlay.onclick = function() {
            resetAlert.style.display = 'none';
            resetOverlay.style.display = 'none';
        };
    };

    // Update the showTab function
    window.showTab = function(tabName) {
        // Update tab buttons
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => tab.classList.remove('active'));
        const activeTab = document.querySelector(`.tab-btn[onclick="showTab('${tabName}')"]`);
        if (activeTab) activeTab.classList.add('active');

        // Update tab content
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        const selectedTab = document.getElementById(`${tabName}Tab`);
        if (selectedTab) {
            selectedTab.classList.add('active');
            selectedTab.style.display = 'block';
        }

        // Update device list when switching tabs
        updateDeviceList();
    };

    // Add a function to check camera permissions
    async function checkCameraPermission() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            // Stop the stream immediately after checking
            stream.getTracks().forEach(track => track.stop());
            return true;
        } catch (err) {
            return false;
        }
    }
}); 