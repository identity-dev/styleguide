$(function(){

  var Identity = window.Identity || {};

  Identity.showNotification = function(event, options) {

    var $message,
        settings = {},
        defaults = {
          type:       'success',
          content:    'Something generic has occurred and this message is informative.',
          selector:   '#notifications',
          permanent:  false
        };

    // Create our settings object out of our defaults and options
    $.extend(settings, defaults, options);

    if(settings.type == "error"){
      settings.permanent = true;
    }

    // create the notice
    $message = $("<div />")
      .attr({ role: 'notice' })
      .addClass( 'notification' + ' ' + 'notification--' + settings.type)
      .append('<div class="notification-content"> '+ settings.content + '<div class="notification-dismiss"></div></div>');


    // remove any existing
    $( settings.selector ).children('*').slideUp(200, function(){
      $(this).remove();
    });

    // append the notice to the appropriate container
    $( settings.selector ).append($message);

    $message.hide().slideDown(200);

    if( ! settings.permanent){
      if (settings.timeout){
        setTimeout(function(){
          $message.slideUp(200, function(){
            $(this).remove();
          });
        }, settings.timeout);
      }
      else {
        setTimeout(function(){
          $message.slideUp(200, function(){
            $(this).remove();
          });
        }, delayConfig());
      }
    }

    function delayConfig(){
      if (settings.type == "neutral")
        return 10000;
      if (settings.type == "success")
        return 7000;
    }
  }

  Identity.removeNotification = function(el){
    var $notification = el.parents('.notification');
    $notification.slideUp(100, function(){
      $notification.remove();
    });
  }

// ***** global event listeners ***** //

  // stick messages to top on scroll
  $(window).scroll(function(e){
    var header_height = $("header").innerHeight(),
                  $el = $('#notifications');

    if ($(this).scrollTop() > header_height){
      $el.css({'position': 'fixed'});

      if( $(window).width() < 768 )
        $el.css({'top': 0});
      else
        $el.css({'top': 0});

    } else if ($(this).scrollTop() <= header_height){
      if( $(window).width() < 768 )
        $el.css({'position': 'absolute'});

      $el.css({'top': header_height - $(this).scrollTop()});
    }
  });

  $(document).on("window:message", function(event, options){
    Identity.showNotification(event, options);
  });

  // when the dismiss button is clicked on the notice, hide it
  $(document).on('click', '.notification-dismiss', function(){
    Identity.removeNotification($(this));
  });

  window.Identity = Identity;
});
