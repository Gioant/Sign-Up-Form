//getting form inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phoneNum = document.getElementById("phoneNum");

const password = document.getElementById("Pass");
const confirmPass = document.getElementById("ConfirmPass");

const submitBtn = document.getElementById("submit");


//adding event listeners and calling appropriate functions
firstName.addEventListener("input", validateName);
lastName.addEventListener("input", validateName);

phoneNum.addEventListener("input", validatePhone);
phoneNum.addEventListener("blur", formatPhone);

submitBtn.addEventListener("click", checkInputs);

//function for validating first & last name
function validateName(event) {
    const value = event.target.value;

    //replace any characters that is not a letter with empty ""
    const newValue = value.replace(/[^a-zA-Z]/g, "");

    //uppercase first letter and letters after that put it into lowercase
    const finalValue = newValue.charAt(0).toUpperCase() + newValue.slice(1).toLowerCase();

    // Set the value of the input element to the cleaned and formatted value
    event.target.value = finalValue;
}

//function to validate phone number
function validatePhone(event) {
    let digit = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

    return event.target.value = digit[1] + digit[2] + digit[3];
}

//function to format phone
function formatPhone(event) {
    let cellNum = event.target.value;

    // Format the phone number using a regex expression
    let formatted_PhoneNum = cellNum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

    // set the formatted phone num to phone input
    event.target.value = formatted_PhoneNum;
}

function checkInputs(event){
    let inputs = document.querySelectorAll("input");

    inputs.forEach((input => {
        if(isEmpty(input)){
            input.setAttribute("isvalid", "false");
        }
    }));
}

