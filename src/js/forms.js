$(function(){

  var Identity = window.Identity || {};

  Identity.forms = {};

  Identity.forms.toggleShowPassword = function(){
    var togglePasswordShow = function(show) {
      if (show) {
        $('.js-password_toggle').trigger('password:show');
      } else {
        $('.js-password_toggle').trigger('password:hide');
      }
    };

    $(document).on('click', '.widget-toggle_password', function() {
      $(this).toggleClass('showing');
      //trigger the appropriate event
      togglePasswordShow($(this).hasClass('showing'));
    });

    //Listeners for showing and hiding passwords
    $(document).on('password:show', '.js-password_toggle', function() {
      $(this).attr('type', 'text');
    });

    $(document).on('password:hide', '.js-password_toggle', function() {
      $(this).attr('type', 'password');
    });
  };


  window.Identity = Identity;
});
