document.addEventListener('DOMContentLoaded', () => {
    // Try loading the whole body of page
    // var whole_page = document.querySelectorAll('.container');
    // console.log(whole_page);

    var elm=document.getElementsByTagName("html")[0];
    // elm.style.display="none";
    document.addEventListener("DOMContentLoaded",function(event) {
        elm.style.display="block"; 
        console.log("Need to know what this does");
    });
});