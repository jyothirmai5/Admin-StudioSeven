const isLoggedIn = localStorage.getItem('loggedIn');

if (isLoggedIn !== 'true') {
    // Redirect to the login page if not logged in
    window.location.href = 'index.html'; // Change the URL to your login page
}