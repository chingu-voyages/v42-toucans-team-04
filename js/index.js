// Open modal on page load
$(document).ready(function () {
  $("#exampleModal").modal("show");

  // Open/Close Categories

  $(".nav-link-category").click(function () {
    $("#mySidebar").toggleClass("sidebarOpen");
    $("#jokes").toggleClass("jokes-open");
    $(".input-group").toggleClass("input-open");
  });

  $(".closebtn").click(function () {
    $("#mySidebar").toggleClass("sidebarOpen");
    $("#jokes").toggleClass("jokes-open");
    $(".input-group").toggleClass("input-open");
   
  });
  
  $(".surprise-btn").click(function () {
    $(".jokes").fadeIn("slow", function () {});
  });
});
