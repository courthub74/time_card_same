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

// Auth each selection properly to the db
// Redirect to the Registered page

// Add event listener to the submit button
submit_acct_type.addEventListener('click', (e) => {
    // So Submit event doesn't refresh the page
    e.preventDefault();
    // Print out the value of the button selected to the console

    // Psuedo Code
    // Determine button selected
    // Print out the value of that selected button
    if (employer_box.classList.contains == 'clicked') {
        // Do the things

        // Print the console
        console.log(employer_box.value);


    } else if (employee_box.classList.contains == 'clicked') {
        // Do the things

        // Print the console
        console.log(employee_box.value);
    }

    console.log("The account type button is selected");
    // Take to registration confirmation page
    window.location.href = './reg_confirm.html';
});