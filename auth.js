// Listen for auth status change

// LOGIN THE USER

// Query the Sign in form (name and PIN)
const loginForm = document.getElementById('login_form');

// LOGIN THE USER

// add event listener to the login form upon submitting
loginForm.addEventListener('submit', (e) => {
    // So Submit event doesn't refresh the page
    e.preventDefault();

    // Test print button function
    console.log("Submit Button Pressed");

    // NAME FIELD

    // name field (May need to iterate through each field)
    
    // Query the name inputs
    const name_selects = document.querySelector('#dropdown_btn'); //try getelementbyID next

     // in it store the name_selects value in a variable called output
     function getOption() {
        const option_output = name_selects.value; 
        // Test print
        console.log(`The Name Selected: ${option_output}`);
    }

    // Call the getOption function
    getOption();
  


    // PIN FIELD

    // pin field (May need to iterate through each field)
    // Query the pin inputs
    const login_inputs = document.querySelectorAll('input');
    // Test print the node
    // console.log(login_inputs);
    // Iterations through For Each method (PIN NUMBERS)
    login_inputs.forEach(() => {
        // READING THE PIN INPUT VALUES
        // Ok NOW iterate through them (use MAP)
        const pin_auth_value = [...login_inputs].map((login_input) => login_input.value).join("");
        // Test print
        console.log(`The Pin Entered: ${pin_auth_value}`);
    });
});

// NOW TAKE THIS DATA AND MATCH IT WITH THE REGISTERED IN FIREBASE



// ALGO FOR RETRIEVING A PIN AND NAME
/**
 * // Retrieve PIN number from Firebase Realtime Database
    firebase.database().ref('users/' + userId + '/pin').once('value', (data) => {
    const storedPin = data.val();
    // Verify PIN number against provided PIN
    if (storedPin === providedPin) {
        // Login successful
    } else {
        // Invalid PIN
    }
});
 */