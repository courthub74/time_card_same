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
        console.log("Pin Num entered")
        // BELOW is saying if key is less than 4
            // because 0 is starting point
                // jump focus ahead
      if (key === 3) {
    //     // Last one tadaa
    // const userCode = [...inputs].map((input) => input.value).join("");
    //     // This is for the revelation on the page of your Pin #
    //     // codeBlock.classList.remove("hidden");
    //     // code.innerText = userCode;
      } else {
        inputs[key + 1].focus();
      }
      const userCode = [...inputs].map((input) => input.value).join("");
    // BELOW grabs each digit as you type
      console.log(userCode);

      // If the Pin Num is full, change color of button
      if (key === 3) {
        console.log("All pins full");
        // query the submit button 
        let submit_button = document.getElementById('submit_login');
        // Change the color of the Submit Button
        submit_button.classList.add('filled');
      }
    }
    
  });
  
});

// const reset = () => {
//   form.reset();
//   codeBlock.classList.add("hidden");
//   code.innerText = "";
// };


