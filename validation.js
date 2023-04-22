//getting form inputs
const firstName = document.getElementById("firstName");

//adding event listeners and calling appropriate functions
firstName.addEventListener("input", validate_FirstName);


//function for checkingName
function validate_FirstName(event) {
    const value = event.target.value;

    //replace any characters that is not a letter with empty ""
    const newValue = value.replace(/[^a-zA-Z]/g, "");

    const finalValue = newValue.replace(/^[a-zA-Z]|[\W_]+[a-zA-Z]/g, (char) =>
        char.toUpperCase()
    ).replace(/[A-Z]/g, (char) =>
        char.toLowerCase()
    );


    // Set the value of the input element to the cleaned and formatted value
    event.target.value = finalValue;
}


