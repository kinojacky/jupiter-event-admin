(function($) {
  "use strict"; // Start of use strict

  $('#sidebar-wrapper .collapse').collapse('hide');

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

})(jQuery); // End of use strict
