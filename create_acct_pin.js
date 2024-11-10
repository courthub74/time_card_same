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
    // If key is not 0
    if (key !== 0) {
        // Event listener for focus when input focused
        input.addEventListener("click", function () {
            inputs[0].focus();
        });
    }
  // Add event listener function to input that iterates through the inputs
  input.addEventListener("keyup", function () {

    // For FIRST PIN ROW
    if (input.value) {
        console.log("First Row");
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
    }
  });
});

// For SECOND PIN ROW
// NOW map through the inputs_two
inputs_two.forEach((input_2, key_2) => {
    input_2.addEventListener("keyup", function () {
        if (input_2.value) {
            inputs_two[0].focus();
            console.log("Second Row");
            if (key_2 === 3) {
                // Do nothing as long as you have 4 pin nums
                // inputs_two[0].focus();
            } else {
                inputs_two[key_2 + 1].focus();
            }
            // NOW lets record the Pin Nums for login match
            const createPins_2 = [...inputs_two].map((input_2) => input_2.value).join("");
            // Print the pin nums in the console
            console.log(createPins_2);
        }
    });
});

// console.log(`The first Row Pin: ${inputs_two}`);

 // If the pin numbers match
// Alert that they match
// change color of submit button
if (inputs === inputs_two) {
    console.log("Pin Numbers Match");
    
}

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