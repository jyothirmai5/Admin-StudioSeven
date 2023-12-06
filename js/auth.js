const validUsername = 'username';
const validPassword = 'password';

$(document).ready(function () {
    $('#login-btn').on('click', function () {
        console.log('login clicked');
        const enteredUsername = $('#username').val();
        const enteredPassword = $('#password').val();

        if (enteredUsername === validUsername && enteredPassword === validPassword) {
            localStorage.setItem('username', enteredUsername);
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'dashboard.html';
        } else {
            $('#invalidPasswordModal').modal('show');
        }
    });
});