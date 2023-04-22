const firstName = document.getElementById("firstName");

firstName.addEventListener("input", checkFirstName);

function checkFirstName(event) {
    const value = event.target.value;
    const newValue = value.replace(/[0-9]/g, ""); // Replace all numbers with empty string
    event.target.value = newValue;
}


// firstName.addEventListener("input", (e) => {
//     const fName_input = e.target.value;


//     const containsNumber = /[0-9]/g.test(fName_input);
//     if (containsNumber) {
//         e.preventDefault();
//         console.log("Numbers are not allowed in the first name field.");
//     }
// });