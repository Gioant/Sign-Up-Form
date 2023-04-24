//getting form inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phoneNum = document.getElementById("phoneNum");

const email = document.getElementById("Email");

const password = document.getElementById("Pass");
const confirmPass = document.getElementById("Confirm_Pass");

const submitBtn = document.getElementById("submit");

const inputs = document.querySelectorAll("input");



//adding event listeners and calling appropriate functions
firstName.addEventListener("input", validateName);
lastName.addEventListener("input", validateName);

phoneNum.addEventListener("input", validatePhone);
phoneNum.addEventListener("blur", formatPhone);

email.addEventListener("input", validateEmail);

password.addEventListener("input", checkPass);
confirmPass.addEventListener("input", checkPass);

confirmPass.addEventListener("blur", checkPasswords);

submitBtn.addEventListener("click", checkInputs);

//function for validating first & last name
function validateName(event) {
    const value = event.target.value;

    //replace any characters that is not a letter with empty ""
    const newValue = value.replace(/[^a-zA-Z]/g, "");

    //uppercase first letter and letters after that put it into lowercase
    const finalValue = newValue.charAt(0).toUpperCase() + newValue.slice(1).toLowerCase();

    //check length of final value
    if (finalValue.length < 3) {
        event.target.classList.add("invalid");
        event.target.classList.remove("valid");
        event.target.setCustomValidity("Enter at least 3 characters");
    } else {
        event.target.setCustomValidity("");
        event.target.classList.remove("invalid");
        event.target.classList.add("valid");
    }

    // Set the value of the input element to the cleaned and formatted value
    event.target.value = finalValue;
}

//function to validate phone number
function validatePhone(event) {
    let phoneInput = event.target;

    let digit = phoneInput.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);


    if (phoneInput.value.length < 10) {
        phoneInput.classList.remove("valid");
        phoneInput.classList.add("invalid");
    } else {
        formatPhone(event);
    }


    phoneInput.value = digit[1] + digit[2] + digit[3];
}

function validateEmail(event) {
    let email_Input = event.target.value

    const emailRegex = /^\S+@\S+\.\S+$/;

    let trimmedEmail = email_Input.replace(/\s+/g, "");

    event.target.value = trimmedEmail;

    if (!emailRegex.test(email.value)) {
        email.classList.remove("valid");
        email.classList.add("invalid");
    } else {
        email.classList.remove("invalid");
        email.classList.add("valid");
    }
}

//function to format phone
function formatPhone(event) {
    let cellNum = event.target.value;


    // Format the phone number using a regex expression
    let formatted_PhoneNum = cellNum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

    // Check if the formatted phone number matches the regex expression for a valid phone number
    if (formatted_PhoneNum.match(/^\d{3}-\d{3}-\d{4}$/)) {
        event.target.classList.remove("invalid");
        event.target.classList.add("valid");
    } else {
        event.target.classList.remove("valid");
        event.target.classList.add("invalid");

        // set the formatted phone num to phone input
        return event.target.value = formatted_PhoneNum;
    }

}

function checkPasswords() {

    //if passwords don't match
    if (password.value !== confirmPass.value) {
        password.classList.add("invalid");
        password.classList.remove("valid");

        confirmPass.classList.add("invalid");
        confirmPass.classList.remove("valid");
    } else {
        password.classList.remove("invalid");
        password.classList.add("valid");

        confirmPass.classList.remove("invalid");
        confirmPass.classList.add("valid");
    }
}

function checkPass(event) {
    let pass_inputs = event.target.value;

    if (pass_inputs.length >= 5) {
        checkPasswords();
    } else {
        event.target.classList.remove("invalid");
    }
}


function checkInputs() {

    inputs.forEach((input => {
        if (input.value.length === 0) {
            input.setCustomValidity("Input Cannot Be Empty!");
            input.classList.remove("valid");
            input.classList.add("invalid");
        }
    }));
}
