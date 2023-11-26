function validEmail(email) {
    // Regular expression for a valid email address
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Check if the input matches the email regex
    return emailRegex.test(email);
}

// Take user input
var user_email = prompt("Enter an email address:");


if (validEmail(user_email)) {
    alert(true);
} else {
    alert(false);
}

