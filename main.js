$(document).ready(function () {
    $(".fade-in-button").click(function () {
      $(".fade-text").fadeIn("slow"); // fade in the paragraph 
    });
    $(".fade-out-button").click(function () {
      $(".fade-text").fadeOut("slow"); // fade out the paragraph
    });
    $("#hide").click(function () {
      $("#show-text").hide(); // hide the text
    });
  
    $("#show").click(function () {
      $("#show-text").show();  // show the hidden text
    });
    $("#appendButton").click(function () {
      var newText = "Hello I appended . ";
      $("#append-text").append(newText); // append text
    });
    $("#color-button").click(function () {
      $("#color-text").css("color", "red"); // change color
    });
    $("#slideUp-Button").click(function () {
     $("#slideUp-text").slideUp();  // Slide up the paragraph
    });
  
    $("#slideDown-Button").click(function () {
      $("#slideUp-text").slideDown(); // Slide down the paragraph
    });
  });



