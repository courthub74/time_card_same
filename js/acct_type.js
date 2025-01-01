// ACCOUNT TYPE

// This page is for changing the css class of clicked acct type button

// and send the selected value to the database

// Query the account type buttons each

console.log("Account Type page lives");

// Grab the data from create account page [registration.js] to send to confirmation page
// Get the URL Parameters (it's a search)
const urlParams = new URLSearchParams(window.location.search);

// First Name 
    // As a ternery operator that states:
    // search for the variable 'first' from url parameters
        // If it's there, then decode it.
        // If not return no first name
        const user_first = urlParams.get('first') ?
        decodeURIComponent(urlParams.get('first')) : 'No First Name';
        
        // Last Name
        const user_last = urlParams.get('last') ? 
            decodeURIComponent(urlParams.get('last')) : 'No Last Name';
        
        // Account Type
        
        
        // Pin Number
        const user_pin = urlParams.get('pin') ?
            decodeURIComponent(urlParams.get('pin')) : 'No Pin Number';

// query the div to display data in
let user_reg_info = document.getElementById('reg_data');

// NOW place the decoded urlparam variables in the above variable
user_reg_info.innerHTML = `
    <p class="users_info">You are registered as:</p>
    <p>${user_first}</p>
    <p>${user_last}</p>
    <p></p>
    <p>Pin: ${user_pin}</p>
`;

// Client type buttons

// Keep track of the selected button make up a value and set it to null
let selectedButton = null;

// Employer Box
const employer_box = document.getElementById('employer_box');

// Employee Box
const employee_box = document.getElementById('employee_box');

// Query the submit button
const submit_acct_type = document.getElementById('submit_acct_type');

// Let's submit the whole form

// Add event listener to buttons to change the css

// Employer
employer_box.addEventListener('click', (e) => {
    // Keep page from refreshing
    e.preventDefault();
    // set this as selected button
    selectedButton = employer_box.value;
    // Test print
    console.log("Employer Button");
    // change the css of the button
    employer_box.classList.add('clicked');
    // remove clicked on other button
    employee_box.classList.remove('clicked');
    // enable the submit button
    submit_acct_type.removeAttribute('disabled');
});

// Employee
employee_box.addEventListener('click', (e) => {
    // Keep page from refreshing
    e.preventDefault();
    // set this as selected button
    selectedButton = employee_box.value;
    // Test print
    console.log(employee_box.value);
    // change the css of the button
    employee_box.classList.toggle('clicked');
    // remove clicked on other button
    employer_box.classList.remove('clicked');
    // enable the submit button
    submit_acct_type.removeAttribute('disabled');
});

// Encode the Button selected

// Submit all info from this page to the confirmation page
submit_acct_type.addEventListener('click', (e) => {
    // Prevent reset of page
    e.preventDefault();

    // Retreive the encoded url items along with the added employee type

    // Concatenate the name
    let userName = user_first.concat(" ", user_last);

    // just shortened the variable
    const user = userName;

    // Test print the User Name (concatenated)
    console.log(user);

    // Test print User Pin
    console.log(user_pin);
    const pin = user_pin;

    // NOW do the button
    // If there is a selected button, store the value in variable
    if (selectedButton) {
        console.log('Selected option: ', selectedButton);
    }

    // Set selected button to a variable
    const account = selectedButton;

    // Test Print selected button
    console.log(account);

    // Encode all to send to confirmation page

    // User
    const encodedUser = encodeURIComponent(user);

    // Pin
    const encodedPin = encodeURIComponent(pin);

    // Account type
    const encodedAcct_type = encodeURIComponent(account);

    // AND send to confirmation page
    window.location.href = `confirmation.html?user=${encodedUser}&pin=${encodedPin}&account=${encodedAcct_type}`;

    // Then send to the database

});

