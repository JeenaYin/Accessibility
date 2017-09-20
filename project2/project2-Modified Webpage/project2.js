$(document).ready(function() {
  // Enter key to toggle the checkbox
  $("#receivespambutton").keypress(function(e){
      if((e.keyCode ? e.keyCode : e.which) == 13 ||
         (e.keyCode ? e.keyCode : e.which) == 32){
          $(this).trigger('click');
      }
  });

  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function() {

    if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
      $($("#receivespambutton").children()[0]).attr("src", "pics/checked.png");
      $("#receivespambutton").attr("aria-checked", "true");
    } else {
      $($("#receivespambutton").children()[0]).attr("src", "pics/unchecked.png");
      $("#receivespambutton").attr("aria-checked", "false");
    }
  });


  // Play video
  $("#videoplayer").mousedown(function() {

    if($($("#videoplayer").children()[0]).attr("src")=="pics/play.png") {
      $($("#videoplayer").children()[0]).attr("src","pics/pause.jpg");
      $("#thevideo")[0].play();
    } else {
      $($("#videoplayer").children()[0]).attr("src","pics/play.png");
      $("#thevideo")[0].pause();
    }
  });

  // Form validation
  $("#signupbutton").click(function() {
    if($("#fn").val()=="" || $("#mi").val()=="" || $("#ln").val()=="") {
      $("#name").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    if($("#em").val()=="") {
      $("#email").addClass("error");

      return;
    } else {
      $("#name").removeClass("error");
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });
});
