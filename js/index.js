

// Open modal on page load
$(document).ready(function(){
    $("#exampleModal").modal('show');

    // Open/Close Categories

    $('.nav-link-category').click(function(){
        $('#mySidebar').toggleClass('sidebarOpen');
       
    });

    $('.closebtn').click(function(){
        $('#mySidebar').toggleClass('sidebarOpen');
    })
 
});






  
// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
// }