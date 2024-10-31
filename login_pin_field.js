// PIN FIELDS

// This is so the pinfield automatically skips to next pin put after a number is entered

// FIRST query the Inputs
const inputs = document.querySelectorAll('input');

inputs.forEach((input, key) => {
    // Test print
    console.log(inputs);
    // 
    if (key != 0) {
        input.addEventListener('click', function () {
            inputs[0].focus();
        });
    }
    // Add event listener function to input that iterates through the inputs
    input.addEventListener('keyup', function () {
        if (input.value) {
            // Then Do the stuff
            console.log("Num or Let entered");
            if (key === 4) {
                // Map through the inputs
                const pinCode = [...inputs].map((input) => input.value).join("");
            }
            // Match pincode to registered (for login)
            
        }
    });
});

// const inputs = document.querySelectorAll("input");
// const codeBlock = document.getElementById("code-block");
// const code = document.getElementById("code");
// const form = document.querySelector("form");

// inputs.forEach((input, key) => {
    // If key is not 0
//   if (key !== 0) {
        // Event listener for focus when input focused on (for skip ahead)
//     input.addEventListener("click", function () {
//       inputs[0].focus();
//     });
//   }
    // Add event listener function to input that iterates through the inputs
//   input.addEventListener("keyup", function () {
//     if (input.value) {
//       if (key === 3) {
//         // Last one tadaa
//         const userCode = [...inputs].map((input) => input.value).join("");
            // This is for the revelation on the page of your Pin #
//         codeBlock.classList.remove("hidden");
//         code.innerText = userCode;
//       } else {
//         inputs[key + 1].focus();
//       }
//     }
//   });
// });

// const reset = () => {
//   form.reset();
//   codeBlock.classList.add("hidden");
//   code.innerText = "";
// };
