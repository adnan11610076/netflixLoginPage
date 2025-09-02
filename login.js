let emailField = document.getElementById("email");
let emailError = document.getElementById("emailError");
let passwordField = document.getElementById("password");
let passwordError = document.getElementById("passwordError");
let eyeIcon = document.querySelector(".eyeIcon");
let passwordDiv = document.querySelector('.password-field');
let closeEye = document.querySelector(".closeEye");
let signInBtn = document.querySelector(".signIn-btn");
let checkBox=document.getElementById("checkBox");

// Email Validation Function
function validateEmail() {
    let emailValue = emailField.value.toLowerCase().trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic regex
    if (emailValue === "") {
        emailError.textContent = "Please enter a valid email or phone number.";
        emailError.style.display = "block";
        emailField.style.border = "1px solid rgb(235, 57, 66)";
        return false;
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = "Please enter a valid email.";
        emailError.style.display = "block";
        emailField.style.border = "1px solid rgb(235, 57, 66)";
        return false;
    } else {
        emailError.style.display = "none";
        emailField.style.border = "1px solid #fff";
        return true;
    }



}

// Password Validation Function
function validatePassword() {
    let passValue = passwordField.value.trim();

    if (passValue === "") {
        passwordError.textContent = "Your password must contain between 4 and 60 characters.";
        passwordError.style.display = "block";
        passwordField.style.border = "1px solid rgb(235, 57, 66)";
        return false;
    } else if (passValue.length < 4 || passValue.length > 60) {
        passwordError.textContent = "Your password must contain between 4 and 60 characters.";
        passwordError.style.display = "block";
        passwordField.style.border = "1px solid rgb(235, 57, 66)";
        return false;
    } else {
        passwordError.style.display = "none";
        passwordField.style.border = "1px solid #fff";
        return true;
    }
}


// Blur + Focus Events
emailField.addEventListener("blur", validateEmail);
emailField.addEventListener("focus", () => {
    emailField.style.border = "1px solid #fff";
});

passwordField.addEventListener("blur", validatePassword);
passwordField.addEventListener("focus", () => {
    eyeIcon.classList.add("show-eye");
    passwordField.style.border = "1px solid #fff";
});


// Eye Hover
eyeIcon.addEventListener("mouseenter", () => {
    passwordDiv.classList.add("show-hover");
});

eyeIcon.addEventListener("mouseleave", () => {
    passwordDiv.classList.remove("show-hover");
});


// Toggle function for show/hide password
function togglePassword(show) {
    if (show) {
        passwordField.type = "text";
        eyeIcon.classList.remove("show-eye");
        closeEye.classList.add("show-eye");
    } else {
        passwordField.type = "password";
        closeEye.classList.remove("show-eye");
        eyeIcon.classList.add("show-eye");
    }
}
eyeIcon.addEventListener("click", () => togglePassword(true));
closeEye.addEventListener("click", () => togglePassword(false));


// Sign In Button Validation
signInBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let isEmailValid = validateEmail();
    let isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
        alert("Form is valid, proceed with login...");
    }
});

