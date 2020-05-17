(function($) {
  "use strict"; // Start of use strict

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
