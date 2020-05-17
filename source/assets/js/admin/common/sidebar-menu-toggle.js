(function($) {
  "use strict"; // Start of use strict

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
  // $('#sidebar-secondary .collapse').collapse('hide');

})(jQuery); // End of use strict
