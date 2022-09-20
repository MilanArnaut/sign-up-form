const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

const firstNameError = document.querySelector("#first_name_error");
const lastNameError = document.querySelector("#last_name_error");
const emailError = document.querySelector("#email_error");
const phoneNumberError = document.querySelector("#phone_number_error");
const passwordError = document.querySelector("#password_error");
const confirmPasswordError = document.querySelector("#confirm_password_error");

firstName.addEventListener("input", e => {
    e.preventDefault();

    if(firstName.value === '') {
        firstNameError.textContent = 'Please enter your first name!';
    }
    else{
        firstNameError.textContent = '';
    }
});

lastName.addEventListener("input", e => {
    e.preventDefault();

    if(lastName.value === ''){
        lastNameError.textContent = 'Please enter your last name!';
    }
    else {
        lastNameError.textContent = '';
    }
});

email.addEventListener("input", e => {
    e.preventDefault();

    if(email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid email address!';
    }
    else {
        emailError.textContent = '';
    }
});

phoneNumber.addEventListener("input", e => {
    e.preventDefault();

    if(phoneNumber.validity.patternMismatch) {
        phoneNumberError.textContent = 'Please enter a 10 digit phone number!';
    }
    else {
        phoneNumberError.textContent = '';
    }
});

password.addEventListener("input", e => {
    e.preventDefault();

    if(password.value === '') {
        passwordError.textContent = 'Please enter a valid password!';
    }
    else {
        passwordError.textContent = '';
    }
});

confirmPassword.addEventListener("input", e => {
    e.preventDefault();

    if(password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Password do not match!';
    }
    else {
        confirmPasswordError.textContent = '';
    }
});