//getting form inputs
const firstName = document.getElementById("firstName");

//adding event listeners and calling appropriate functions
firstName.addEventListener("input", validate_FirstName);


//function for checkingName
function validate_FirstName(event) {
    const value = event.target.value;

    //replace any characters that is not a letter with empty ""
    const newValue = value.replace(/[^a-zA-Z]/g, "");

    // Replace the first letter of the input to uppercase 
    const upperCase_letter = newValue.replace(/^./, newValue[0].toUpperCase());

    // Replace all uppercase letters after the first letter to lowercase 
    const finalValue = upperCase_letter.replace(/[A-Z]/g, (char) =>
        char.toLowerCase()
    );

    // Set the value of the input element to the cleaned and formatted value
    event.target.value = finalValue;
}


