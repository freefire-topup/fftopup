// Function to validate UID and show dashboard
function validateAndShowDashboard() {
    const uidInput = document.getElementById('uid').value;
    const errMsg = document.getElementById('uid-error');

    if (uidInput.length < 7) {
        errMsg.style.display = 'block';
        return;
    }

    errMsg.style.display = 'none';

    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');

    const itemList = document.getElementById('item-list');
    itemList.innerHTML = "";

    const packages = [
        { diamonds: 500, price: 100 },
        { diamonds: 2000, price: 200 },
        { diamonds: 4000, price: 400 },
        { diamonds: 8000, price: 800 },
        { diamonds: 16000, price: 1600 },
        { diamonds: 32000, price: 3200 },
        { diamonds: 50000, price: 5000 }
    ];

    packages.forEach(pkg => {
        itemList.innerHTML += `
            <div class="item">
                <span>${pkg.diamonds} Diamonds</span>
                <span>Rs ${pkg.price}</span>
                <button onclick="showBuy()">Buy</button>
            </div>
        `;
    });
}

// Function to show buy screen
function showBuy() {
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('buy-screen').classList.remove('hidden');
}

// ===============================
// JazzCash Payment Details
// ===============================
function showKey() {
    const keyArea = document.getElementById('key-area');

    keyArea.innerHTML = `
        <div class="key-display">
            <h3>JazzCash Payment</h3>

            <p><b>Name:</b> Owais Ahmed</p>

            <p style="font-size:22px;font-weight:bold;color:#00ff66;">
                03289260020
            </p>

            <button onclick="copyKey()">
                Copy Number
            </button>
        </div>
    `;
}

// Copy JazzCash Number
function copyKey() {
    navigator.clipboard.writeText("03289260020");
    showCustomAlert("Number Copied!", "success");
}

// Verify Order
function verifyOrder() {
    document.body.innerHTML = "<h2>Processing...</h2>";

    setTimeout(() => {
        document.body.innerHTML = "<h2>Your Order Successfully!</h2>";
    }, 2000);
}

// Custom Alert
function showCustomAlert(message, type) {
    const alertBox = document.createElement('div');

    alertBox.className = `alert-box ${type}`;
    alertBox.innerText = message;

    alertBox.style.position = "fixed";
    alertBox.style.top = "20px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.padding = "12px 20px";
    alertBox.style.background = "#00c853";
    alertBox.style.color = "#fff";
    alertBox.style.borderRadius = "8px";
    alertBox.style.fontWeight = "bold";
    alertBox.style.zIndex = "9999";

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}