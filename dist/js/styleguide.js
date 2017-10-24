$(function(){

  var Identity = window.Identity || {};

  /*

  Kit show modal

  */

  Identity.show_modal = function(options){
    var settings = {
      modal: '.overlay',
      can_dismiss: true,
      can_scroll: false
    };

    $.extend(settings, options);
    $( settings.modal ).addClass('overlay--is_active');

    // based on properties handle settings
    if( ! settings.can_scroll) $('body').addClass('u-no-scroll');
    if( ! settings.can_dismiss) $( settings.modal ).addClass('js-no_dismiss');

    $(document).trigger( "modal-opened", { $elem: $(settings.modal) } );
  };

  // event for showing modal
  $( document ).on('click', '.js-show-modal', function(){
      var modal = '#'+ $(this).data('id');
      var dismiss = $(this).data('dismiss');
      var scroll = $(this).data('scroll');

      Identity.show_modal({
        modal: modal,
        can_dismiss: dismiss,
        can_scroll: scroll
      });
  });

  /*

  Kit close modal

  */

  Identity.close_modal = function(options){
    var settings = {
      modal: '.overlay'
    };

    $.extend(settings, options);

    $(settings.modal).removeClass('overlay--is_active');

    $('body').removeClass('u-no-scroll');

    $(document).trigger( "modal-closed", { $elem: $(settings.modal) } );
  };

  // event for closing modal
  $( document ).on('click', '.js-close-modal', function(){
      var modal = '#'+ $(this).data('id');

      Identity.close_modal({modal: modal});
  });

  // event for closing modal on overlay click
  $( document ).on('click', '.overlay', function(event){
      if($(event.target).is('.modal, .js-no_dismiss') || $(event.target).parents('.modal').length > 0){
        event.stopPropagation();
        return true;
      }

      var modal = '#'+ $(this).attr('id');

      Identity.close_modal({modal: modal});
  });

  /*

  Kit toggle tab

  */
  $( document ).on('click', '.js-toggle-tab', function(){
      var tab = $(this).data('id');
      var $tabs = $(this).parents('.tabs');
      var group = $tabs.attr('id');

      $tabs.find('.js-toggle-tab').removeClass('tabs-toggle--is_active');
      $('.'+ group).find('.js-tabs-content').removeClass('tabs-content--is_active');

      $(this).addClass('tabs-toggle--is_active');
      $('#'+ tab).addClass('tabs-content--is_active');

      $(document).trigger( "tab-toggled", { $elem: $('#'+ tab) } );
  });

  /*

  Kit toggle accordion

  */
  $( document ).on('click', '.js-toggle-accordion', function(){
      var accordion = $(this).data('id');

      $(this).toggleClass('accordion--is_active');
      $('#'+ accordion).slideToggle(200);

      $(document).trigger( "accordion-toggled", { $elem: $('#'+ accordion) } );
  });

  /*

  Kit show_popover

  */

  Identity.show_popover = function(options){
    var settings = {
      popover: null
    };

    $.extend(settings, options);

    $(settings.popover).addClass('popover--is_active');
    $('body').addClass('js-popover--is_active');

    $(document).trigger( "popover-shown", { $elem: $(settings.popover) } );
  };

  /*

  Kit hide_popover

  */

  Identity.hide_popover = function(options){
    var settings = {
      popover: null
    };

    $.extend(settings, options);

    $(settings.popover).removeClass('popover--is_active');
    $('body').removeClass('js-popover--is_active');
    $(".popover_child--is_active").removeClass("popover_child--is_active");

    $(document).trigger( "popover-hidden", { $elem: $(settings.popover) } );
  };

  /*

  Kit hover popover

  */
  $( document )
    .on('mouseenter', '.js-hover-popover', function(event){
      var popover = '#'+ $(this).data('id');

      $(event.currentTarget).addClass("popover_child--is_active");

      Identity.show_popover({popover: popover});

  }).on('mouseleave', '.js-hover-popover', function(){
      var popover = '#'+ $(this).data('id');

      Identity.hide_popover({popover: popover});
  });

  /*

  Kit click popover (and "hover" for mobile)

  */
  $( document ).on('click', '.js-click-popover, .js-hover-popover', function(event){
    var popover = '#'+ $(this).data('id');

    $(event.currentTarget).addClass("popover_child--is_active");

    Identity.show_popover({popover: popover});
  });

  $( document ).on('click', '.js-popover--is_active', function(event){
    if($(event.target).is('.popover') || $(event.target).parents('.popover').length > 0){
      event.stopPropagation();
      return true;
    }

    $('.popover--is_active').each(function(){
      Identity.hide_popover({popover: '#'+ $(this).attr('id')});
    });

  });

  window.Identity = Identity;
});

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
