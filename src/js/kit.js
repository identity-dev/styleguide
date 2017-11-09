window.Identity = window.Identity || {};

(function(){
  /*

  Kit show modal

  */

  window.Identity.show_modal = function(options){
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

  /*

  Kit close modal

  */

  window.Identity.close_modal = function(options){
    var settings = {
      modal: '.overlay'
    };

    $.extend(settings, options);

    $(settings.modal).removeClass('overlay--is_active');

    $('body').removeClass('u-no-scroll');

    $(document).trigger( "modal-closed", { $elem: $(settings.modal) } );
  };

  /*

  Kit show_popover

  */

  window.Identity.show_popover = function(options){
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

  window.Identity.hide_popover = function(options){
    var settings = {
      popover: null
    };

    $.extend(settings, options);

    $(settings.popover).removeClass('popover--is_active');
    $('body').removeClass('js-popover--is_active');
    $(".popover_child--is_active").removeClass("popover_child--is_active");

    $(document).trigger( "popover-hidden", { $elem: $(settings.popover) } );
  };


  window.Identity.initKit = function(){
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
        $('#'+ accordion).stop().slideToggle(200);

        $(document).trigger( "accordion-toggled", { $elem: $('#'+ accordion) } );
    });

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

    // only bind once
    window.Identity.initKit = function(){}
  }

  $(function(){
    window.Identity.initKit()
  }) // $(func)
})()
