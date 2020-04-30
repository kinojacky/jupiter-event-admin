(function($) {
  "use strict"; // Start of use strict

  $('.alert.logout').delay(5000).fadeTo("slow", 0.00, function(){ //fade
    $(this).slideUp("slow", function() { //slide up
      $(this).remove(); //then remove from the DOM
    });
  });

  // Menu Toggle Script
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  // Menu Toggle Responsive Toggle Remover
  // Remove it if no needed
  $(window).resize(function() {
    if ($(window).width() > 992) {
      $("#wrapper").removeClass("toggled");
    };
  });

  // Sidebar menu Dropdown Script
  $('#sidebar-secondary .collapse').collapse('hide');

  // Tooltips
  $('[data-toggle="tooltip"]').tooltip()

  // OTP auto-submit
  $('#otptoken').on('keyup',function(){
    var val = $(this).val();
    var len = val.length;

    if(len == 6){
      console.log("Submit!")
      // document.forms[0].submit();
      window.location.href = "/admin/clients/index.html";
    }
  });

})(jQuery); // End of use strict
