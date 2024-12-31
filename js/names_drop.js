// Query the dropdown button
let drop_button = document.getElementById('dropdown_btn');

// Query the List to show when button is clicked
let name_list = document.getElementById('name_list');


// Add an event listener to the drop button that calls the list toggle function
    // and close the dropdown menu if the user clicks outside of it
// drop_button.addEventListener('click', () => {
//     // Test Button
//     console.log("Dropdown Clicked");
//     // Change the class of the name_list
//     name_list.classList.toggle('show');
//     // Test name list
//     // console.log(name_list);
// });

// HERE close the dropdown if clicked outside of the dropdown

// FIRST target the whole window
// window.onclick = function(event) {
//     // Test it out
//     // console.log("Outside of button clicked");
//     // Target the drop button to not be included in this
//     if (!event.target.matches('.dropdown_btn')) {
//         // The Dropdown button was not included
//         console.log("dropdown not included");
//         // See the class change
//         // console.log(name_list);
//          // if name_list contains show class
//         // remove it
//         // if (name_list.classList.contains('show')) {
//         //     name_list.classList.remove('show');
//         // }
//     }
// }






