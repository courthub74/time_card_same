// WHOLE FORM

// FOR A CLEAR BUTTON TO RESET THE PAGE

// query the whole form
const form = document.querySelector('form');

// CLEAR BUTTON 

// query the clear button
const clear_button = document.getElementById('reset_button');

// INPUTS

// query the first set of Pin Inputs
const inputs = document.querySelectorAll('.pin_put');

// query the second set of Pin Inputs
const inputs_two = document.querySelectorAll('.pin_put_2');

// query the pin puts to record the number
const whole_pin = document.getElementById('pin_field');

// query the pin match div for proper display
// const pin_match = document.getElementById('');

// SUBMIT BUTTON
// change the color of the button when all 4 digits entered
// query the submit button
let submit_acct_info = document.getElementById('submit_acct_info');


// JS for pin puts
inputs.forEach((input, key) => {
  // Add event listener function to input that iterates through the inputs
  input.addEventListener("keyup", function () {
    // For FIRST PIN ROW
    if (input.value) {
        console.log("First Row");
        // NOW let's say if the key is less than 4
            // jump focus ahead
        if (key === 3) {
            // Let's read the Pin Nums for matching and login
            const createPins = [...inputs].map((input) => input.value).join("");
            // Print the digits out to the console
            console.log(`The First Pin Number is: ${createPins}`);
            // After 4 pins entered, jump to next set
            inputs_two[0].focus();
        } else {
            // Less than 4 pin nums skip to next input field (First Set)
            inputs[key + 1].focus();
        }
     }
  });
});

// For SECOND PIN ROW
// NOW map through the inputs_two
inputs_two.forEach((input_2, key_2) => {
    // Record the keys entered
    input_2.addEventListener("keyup", function () {
        if (input_2.value) {
            // inputs_two[0].focus();
            console.log("Second Row");
            // if all 4 inputs are filled
            if (key_2 === 3) {
                // Map through the pin field and store it in a variable
                const createPins_2 = [...inputs_two].map((input_2) => input_2.value).join("");
                // Print the pin nums in the console
                console.log(`The Second Pin Number is: ${createPins_2}`);
            } else {
                inputs_two[key_2 + 1].focus();
            }
        }
    });
});

//////////////////////////////////////////////////////////////
// COMPARISON MAPS BELOW

// Pin Row 1
inputs.forEach((input_1, key_1) => {
    // Record Keys for first pin field comparison
    input_1.addEventListener("keyup", function () {
        // For values entered in the FIRST PIN ROW
        if (input_1.value) {
            // Test print
            console.log("first row: compare");
            // Map through the key_1
            const pinsOne = [...inputs].map((input_1) => input_1.value).join("");
            // Print the digits to the console
            console.log(`The First Pin for comparing to Second: ${pinsOne}`);
        }
    });
});

// Pin Row 2
inputs_two.forEach((input_2, key_2) => {
    // Record Keys for first pin field comparison
    input_2.addEventListener("keyup", function () {
        // For values entered in the SECOND PIN ROW
        if (input_2.value) {
            // Test print
            console.log("second row: compare");
            // You need all 4 pins to get filled before comparison
            if (key_2 === 3) {
                // Map through the key_2
                const pinsTwo = [...inputs_two].map((input_2) => input_2.value).join("");
                // Print the digits to the console
                console.log(`The Second Pin for comparing to First: ${pinsTwo}`);
                // Get the inputs from One
                inputs.forEach((input_1) => {
                
                    // For values entered in the First
                    if (input_1.value) {
                        // Map through
                        const pinsOneCompare = [...inputs].map((input_1) => input_1.value).join("");
                        // Print digits to the console
                        console.log(`The First Pin for comparing to the Second: ${pinsOneCompare}`);
                        // For comparing the second to first
                        console.log(`Second to first: ${pinsTwo}`);
                        if (pinsTwo === pinsOneCompare) {
                            console.log("The Pins match");
                        } else if (pinsTwo !== pinsOneCompare) {
                            console.log("Pins Don't match");
                        }
                    }
                });
            }
        }
    })
})


// Call this function in the Clear button
const reset = () => {
    form.reset();
    // change the class list of the button below
};

// Add event listener to the reset button 
clear_button.addEventListener('click', () => {
    console.log("reset button on create acct page");
    // Call Reset form
    reset();
});