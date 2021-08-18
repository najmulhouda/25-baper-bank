document.getElementById('login-submit').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value
    // console.log(userEmail);

    //get youser password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value
    // console.log(userPassword);
    if(userEmail == 'najmulhouda6@gmail.com' && userPassword == 'najmul'){
        window.location.href = 'banking.html'
    }
} )

