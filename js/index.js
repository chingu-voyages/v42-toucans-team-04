// Open modal on page load
$(document).ready(function () {
  $("#exampleModal").modal("show");

  // Open/Close Categories

  $(".nav-link-category").click(function () {
    $("#mySidebar").toggleClass("sidebarOpen");
  });

  $(".closebtn").click(function () {
    $("#mySidebar").toggleClass("sidebarOpen");
  });
  $(".category-btn").click(function () {
    $("#mySidebar").removeClass("sidebarOpen");
  });
  $(".surprise-btn").click(function () {
    $(".jokes").fadeIn("slow", function () {});
  });
});
