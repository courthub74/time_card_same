// REGISTER THE USER

// Listen for auth change (may need to use the fb auth on this page)

// Query the firstname input
const firstname = document.getElementById('firstname');

// Query the lastname
const lastname = document.getElementById('lastname');

// Query the sign up form (pin numbers) for Submitting
const create_acct_form = document.getElementById('create_acct_form');

// Query the submit button
const submit_registration = document.getElementById('submit_acct_info');

// Query the Pin match confirmations

// Match
const match_confirm = document.querySelector('.match_');

// No Match
const no_match_confirm = document.querySelector('.no_match');


// Add the event listener to submit button to register the user
create_acct_form.addEventListener('submit', (e) => {
    // So Submit event doesn't refresh the page
    e.preventDefault();

    // Test print button function
    console.log("Submit Button Pressed");

    // Use square bracked notation to locate the pin #s in the form
    //Retrieve user first name text, store it in variable
    let first = firstname.value;
    // Test print for now
    console.log(first);
    
    // Retrieve user last name text, store it in variable
    let last = lastname.value;
    // Test print for now
    console.log(last);
    // NEXT use auth.createUserWithNameAndPassword async function (take first and last name into this)

    // in here, query the pin inputs
    const pin_set = document.querySelectorAll('.pin_put');
    // Test print the node
    // console.log(pin_set);

    // NOW map through the first pins row
        // as the second pin field is just there to confirm and activate submit button
    // pin_set.forEach(() => {
    //     // READING THE PIN INPUT VALUES
    //     // Ok NOW iterate through them (use MAP)
    //     const pin_set_value = [...pin_set].map((each_pin_num) => each_pin_num.value).join("");
    //     // Test print
    //     console.log(`The Pin Entered: ${pin_set_value}`);
    // });

    // pin set value to encode
    const pin_set_value = [...pin_set].map((each_pin_num) => each_pin_num.value).join("");
    
    // THEN reset the page
    create_acct_form.reset();

    // Set the Submit back to disabled (if statements)
    submit_registration.disabled = true;

     // Clear the Pin match confirmed

    // for MATCH
    match_confirm.classList.remove('entered');

    // take user to confirmation page 
    window.location.href = './acct_type.html';

    // for NO MATCH (don't really need)
    // no_match_confirm.classList.remove('entered');

    // Encoded parameters here

    // First Name
    const encodedFirst = encodeURIComponent(first);

    // Last Name
    const encodedLast = encodeURIComponent(last);

    // Pin Number
    const encodedPin = encodeURIComponent(pin_set_value);

    
    // Redirect with URL parameters
    window.location.href = `confirmation.html?first=${encodedFirst}&last=${encodedLast}&pin=${encodedPin}`
});

// take user to confirmation page 


