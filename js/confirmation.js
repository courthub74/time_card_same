// Test Print Location
console.log("We are @ the Confirmation Page");

// Get the URL Parameters (it's a search)
const urlParams = new URLSearchParams(window.location.search);

// Retrieve and decode parameters

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


// Display received data

// // query the div to display data in
// let user_reg_info = document.getElementById('reg_data');

// // NOW place the decoded urlparam variables in the above variable
// user_reg_info.innerHTML = `
//     <p class="users_info">You are registered as:</p>
//     <p>${user_first}</p>
//     <p>${user_last}</p>
//     <p></p>
//     <p>Pin: ${user_pin}</p>
// `;