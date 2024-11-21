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
    // NEXT use auth.createUserWithNameAndPassword async function 

    // Retrieve user last name text, store it in variable
    let last = lastname.value;
    // Test print for now
    console.log(last);

    // in here, query the pin inputs
    const pin_set = document.querySelectorAll('.pin_put');
    // Test print the node
    console.log(pin_set);

    // NOW map through the first pins row
        // as the second pin field is just there to confirm and activate submit button
    
    // THEN reset the page
    create_acct_form.reset();
});

// take user to confirmation page


