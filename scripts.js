// script.js

// Handle Sign Up Form Submission
document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    // Basic validation (add more complex validation as needed)
    if (name === '' || email === '' || password === '') {
        document.getElementById('signup-response').textContent = "All fields are required!";
        return;
    }
    
    // Save user data in localStorage (simulate a database)
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    
    // Redirect to profile page
    window.location.href = 'profile.html';
});

// Handle Profile Page (Display User Info)
window.addEventListener('load', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        document.getElementById('profile-name').textContent = `Name: ${user.name}`;
        document.getElementById('profile-email').textContent = `Email: ${user.email}`;
    } else {
        // If no user is found in localStorage, redirect to sign-up
        window.location.href = 'signup.html';
    }
});

// Handle Logout
document.getElementById('logout-btn')?.addEventListener('click', function() {
    localStorage.removeItem('user'); // Clear user data
    window.location.href = 'signup.html'; // Redirect to sign-up page
});
// script.js

// Check if a user is logged in on page load
window.addEventListener('load', function() {
    const user = JSON.parse(localStorage.getItem('user'));

    // If user is logged in, display profile info
    if (user) {
        document.getElementById('profile-name').textContent = `Name: ${user.name}`;
        document.getElementById('profile-email').textContent = `Email: ${user.email}`;
        document.getElementById('user-profile').style.display = 'block';
        document.getElementById('auth-options').style.display = 'none';
    } else {
        // If no user is logged in, show login and sign-up options
        document.getElementById('user-profile').style.display = 'none';
        document.getElementById('auth-options').style.display = 'block';
    }
});

// Handle Logout
document.getElementById('logout-btn')?.addEventListener('click', function() {
    localStorage.removeItem('user'); // Clear user data
    window.location.href = 'profile.html'; // Reload the page to show login/signup
});
// Handle Login Form Submission
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Fetch stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
        document.getElementById('login-response').textContent = "No user found. Please sign up.";
        return;
    }

    // Basic validation: check if email and password match
    if (email === storedUser.email && password === storedUser.password) {
        document.getElementById('login-response').textContent = "Login successful!";
        window.location.href = 'profile.html'; // Redirect to profile page on success
    } else {
        document.getElementById('login-response').textContent = "Invalid email or password.";
    }
});
