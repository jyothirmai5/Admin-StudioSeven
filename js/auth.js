$(document).ready(function () {
    $('#login-btn').on('click', function () {
        const enteredUsername = $('#username').val();
        const enteredPassword = $('#password').val();
        if (!isValidEmail(enteredUsername)) {
            $("#emailError").text("Invalid email address");
            if (!isValidPassword(enteredPassword)) {
                $("#passwordError").text("Password must be 6-8 characters with 1 uppercase and 1 special character");
                return;
            } else {
                $("#passwordError").text("");
            }
            return;
        } else {
            $("#emailError").text("");
            if (!isValidPassword(enteredPassword)) {
                $("#passwordError").text("Password must be 6-12 characters with 1 uppercase and 1 special character");
                return;
            } else {
                $("#passwordError").text("");
            }
        }

        // Validate password
        if (!isValidPassword(enteredPassword)) {
            $("#passwordError").text("Password must be 6-12 characters with atleast 1 uppercase and 1 special character");
            return;
        } else {
            $("#passwordError").text("");
        }
        localStorage.setItem('username', enteredUsername);
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';


    });

    $('#logout-btn').on('click', function () {
        clearLocalStorage();
        window.location.href = 'index.html';
    })


    // Function to validate email format
    function isValidEmail(email) {
        // Use a regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate password length
    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,12}$/;
        return passwordRegex.test(password);
    }
});

function clearLocalStorage() {
    localStorage.setItem('username', null);
    localStorage.setItem('loggedIn', 'false');
}
function checkLoggedIn() {
    // Assuming you have a key named 'isLoggedIn' in localStorage
    const isLoggedIn = localStorage.getItem('loggedIn');
    console.log('isLoggedIn', isLoggedIn);
    if (isLoggedIn === 'true') {
        // User is logged in, redirect to the dashboard
        window.location.href = 'dashboard.html'; // Change the URL to your dashboard page
    } else {
        window.locationhref = 'index.html';
    }
}