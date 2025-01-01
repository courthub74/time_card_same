// WHOLE FORM

// FOR A CLEAR BUTTON TO RESET THE PAGE

// query the whole form
const form = document.querySelector('form');

// CLEAR BUTTON 

// query the clear button
const clear_button = document.getElementById('reset_button');

// LOG IN NAME

// FIRST query the name selected

// PIN FIELDS

// This is so the pinfield automatically skips to next pin put after a number is entered

// FIRST query the Inputs
const inputs = document.querySelectorAll('input');

// query the pin puts to record the number
const whole_pin = document.getElementById('pin_field');

// SUBMIT BUTTON
// change the color of the button when all 4 digits entered
// query the submit button 
let submit_button = document.getElementById('submit_login');


// JS for pin puts to calculate filling the 4 inputs before you do things
inputs.forEach((input, key) => {
    // If key is not 0
  if (key !== 0) {
    // Event listener for focus when input focused on (for skip ahead)
    input.addEventListener("click", function () {
      inputs[0].focus();
    });
  }
  // Add event listener function to input that iterates through the inputs upon typing
  input.addEventListener("keyup", function () {
    if (input.value) {
        console.log("Pin Num entered")
        // BELOW is saying if key is less than 4
            // because 0 is starting point
                // jump focus ahead
      if (key === 3) {
      // Do nothing as long as you have 4 pin nums
      } else {
        inputs[key + 1].focus();
      }
      // To Read the Pin Nums for login match (Maps through inputs and joins them into an array)
      const userCode = [...inputs].map((input) => input.value).join("");
    // BELOW grabs each digit as you type
      console.log(userCode);

      // If the Pin Num is full, change color of button
      if (key === 3) {
        console.log("All pins full");
        submit_button.classList.add('filled');
      } else if (key !== 3) {
        submit_button.classList.remove('filled');
      }
    }
    
  });
  
});

// Call this function in the Clear button
  // May need to just reset the pin fields not form
const reset = () => {
  form.reset();
  submit_button.classList.remove('filled');
};



// Add event listener to the reset button
clear_button.addEventListener('click', (e) => {
  // Prevent page from auto refresh
  e.preventDefault();
  // Test print
  console.log("Clear Button Clicked");
  reset();
});

