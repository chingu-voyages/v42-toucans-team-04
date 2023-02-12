// Open modal on page load
$(document).ready(function () {
  $("#exampleModal").modal("show");

  // Open/Close Categories

  $(".nav-link-category").click(function () {
    $("#mySidebar").toggleClass("sidebarOpen");
    if ($(window).width() < 960) {
      if($('#mySidebar').hasClass("sidebarOpen")){
      $("#jokes").addClass("jokes-open");
   $(".input-group").addClass("input-open");
  } else {
    $("#jokes").removeClass("jokes-open");
    $(".input-group").removeClass("input-open");
  }
} 
  });

  $(".closebtn").click(function () {
    $("#mySidebar").toggleClass("sidebarOpen");
    if ($(window).width() < 960) {
      $("#jokes").removeClass("jokes-open");
   $(".input-group").removeClass("input-open");
    }
   
  
    
  });
});
  