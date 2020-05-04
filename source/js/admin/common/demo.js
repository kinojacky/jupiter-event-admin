(function($) {
  "use strict"; // Start of use strict

  // Demo only
  $('.alert.notice').delay(3000).fadeTo("slow", 0.00, function(){ //fade
    $(this).slideUp("slow", function() { //slide up
      $(this).remove(); //then remove from the DOM
    });
  });

  $('.alert.reset-pwd').hide();

})(jQuery); // End of use strict
