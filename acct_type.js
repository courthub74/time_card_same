// ACCOUNT TYPE

// This page is for changing the css class of clicked acct type button

// and send the selected value to the database

// Query the account type buttons each

// Helper function
// let domReady = (cb) => {
//     document.readyState === 'interactive' || document.readyState === 'complete'
//       ? cb()
//       : document.addEventListener('DOMContentLoaded', cb);
//   };
  
//   domReady(() => {
//     // Display body when DOM is loaded
//     document.body.style.visibility = 'visible';
//   });

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
