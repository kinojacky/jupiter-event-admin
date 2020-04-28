(function($) {
  "use strict"; // Start of use strict

  // Menu Toggle Script
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  // Keep it if needed
  $(window).resize(function() {
    if ($(window).width() > 992) {
      $("#wrapper").removeClass("toggled");
    };
  });

  // Sidebar menu Dropdown Script
  $('#sidebar-secondary .collapse').collapse('hide');

  // Tooltips
  $('[data-toggle="tooltip"]').tooltip()

})(jQuery); // End of use strict
