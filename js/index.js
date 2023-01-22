// Open modal on page load
// $(document).ready(function(){
//     $("#exampleModal").modal('show');
// });

// Close directions
function closeDirections(){
    document.querySelector('.card').style.display='none';
}

// Open/Close Categories
function openNav() {
    document.getElementById("mySidebar").style.width = "260px";
  }
  
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}