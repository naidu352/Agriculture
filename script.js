// Function to check if the user is logged in when accessing index.html
function checkLogin() {
    let loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) {
        alert("You must log in first.");
        window.location.href = "login.html";  // Redirect to login page
    }
}
// Function to log in the user
function loginUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        // Set login status and user information in localStorage
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", username); // Optional: Store username
        alert("Login successful!");
        window.location.href = "index.html";  // Redirect to home page
        return false;  // Prevent form from submitting
    } else {
        alert("Please fill in all fields.");
        return false;
    }
}


// Function to check if the user is already logged in when accessing login.html
function redirectIfLoggedIn() {
    let loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn == "true") {
        window.location.href = "index.html";  // Redirect to home page if already logged in
    }
}

// Function to log out the user
function logoutUser() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username"); // Optional: Remove username
    alert("You have logged out.");
    window.location.href = "login.html";  // Redirect to login page
}

// Function to show a specific section
function showSection(sectionId) {
    // Hide all sections
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(`${sectionId}-section`).style.display = 'block';
}
// Ensure redirectIfLoggedIn() runs when loading login.html
if (window.location.pathname.includes("login.html")) {
    redirectIfLoggedIn();
}

// Ensure checkLogin() runs when loading index.html
if (window.location.pathname.includes("index.html")) {
    checkLogin();
}