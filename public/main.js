// This script checks if the user is logged in
window.onload = function() {
    const user = sessionStorage.getItem('user');  // Check if user is logged in using session storage

    if (!user) {
        alert("You need to login first!");
        window.location.href = 'login.html';  // Redirect to login if not logged in
    }
};
