// ACCOUNT TYPE

// This page is for changing the css class of clicked acct type button

// and send the selected value to the database

// Query the account type buttons each

console.log("Account Type page lives");

// Employer Box
const employer_box = document.getElementById('employer_box');

// Employee Box
const employee_box = document.getElementById('employee_box');

// Query the submit button
const submit_acct_type = document.getElementById('submit_acct_type');

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

// Let's submit the whole form

// Add event listener to buttons to change the css

// Employer
employer_box.addEventListener('click', (e) => {
    // Keep page from refreshing
    e.preventDefault();
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
    // Test print
    console.log(employee_box.value);
    // change the css of the button
    employee_box.classList.toggle('clicked');
    // remove clicked on other button
    employer_box.classList.remove('clicked');
    // enable the submit button
    submit_acct_type.removeAttribute('disabled');
});


