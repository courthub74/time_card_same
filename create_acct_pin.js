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

// SUBMIT BUTTON
// change the color of the button when all 4 digits entered
// query the submit button
let submit_acct_info = document.getElementById('submit_acct_info');


// JS for pin puts
inputs.forEach((input, key) => {
    // If key is not 0
    if (key !== 0) {
        // Event listener for focus when input focused on (for skip ahead)
        input.addEventListener("click", function () {
            inputs[0].focus();
        });
    }
  // Add event listener function to input that iterates through the inputs
  input.addEventListener("keyup", function () {
    if (input.value) {
        console.log("Pin Num entered");
        // NOW let's say if the key is less than 4
            // jump focus ahead
        if (key === 3) {
            // Do nothing to first set as long as you have 4 pin nums
            // After 4 pins entered, place focus on next set
            inputs_two[0].focus();
        } else {
            // Less than 4 pin nums skip to next input field (First Set)
            inputs[key + 1].focus();
        }
        // Let's read the Pin Nums for matching and login
        const createPins = [...inputs].map((input) => input.value).join("");
        // Print the digits out to the console
        console.log(createPins);

        // Match the Pin numbers

        // If the pin numbers match
            // Alert that they match
            // change color of submit button
    }
  })
});