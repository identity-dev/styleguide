(function(){

  var Identity = window.Identity || {};

  function matchesSelector(dom_element, selector) {
    var matchesSelector = dom_element.matches || dom_element.matchesSelector || dom_element.webkitMatchesSelector || dom_element.mozMatchesSelector || dom_element.msMatchesSelector || dom_element.oMatchesSelector;
    return matchesSelector.call(dom_element, selector);
  }

  function delegate(type, selector, handler){
    window.addEventListener(type, function(event){
      if(matchesSelector(event.target, selector)){
        handler.call(event.target, event);
        event.stopPropagation();
      }
    })
  }

  /*

  Kit show modal

  */

  Identity.show_modal = function(options){
    var settings = {
      modal: '.overlay',
      can_dismiss: true,
      can_scroll: false
    };

    Object.assign(settings, options);
    $( settings.modal ).addClass('overlay--is_active');

    // based on properties handle settings
    if( ! settings.can_scroll) $('body').addClass('u-no-scroll');
    if( ! settings.can_dismiss) $( settings.modal ).addClass('js-no_dismiss');

    document.dispatchEvent(new CustomEvent("modal-opened", { detail: { $elem: $(settings.modal) } }));
  };

  // event for showing modal
  delegate('click', '.js-show-modal', function(event){
    var modal = '#'+ this.getAttribute('data-id');
    var dismiss = this.getAttribute('data-dismiss');
    var scroll = this.getAttribute('data-scroll');

    Identity.show_modal({
      modal: modal,
      can_dismiss: dismiss,
      can_scroll: scroll
    });
  })

  /*

  Kit close modal

  */

  Identity.close_modal = function(options){
    var settings = {
      modal: '.overlay'
    };

    Object.assign(settings, options);

    $(settings.modal).removeClass('overlay--is_active');

    $('body').removeClass('u-no-scroll');

    document.dispatchEvent(new CustomEvent("modal-closed", { detail: { $elem: $(settings.modal) } }));
  };

  // event for closing modal
  delegate('click', '.js-close-modal', function(event){
    var modal = '#'+ this.getAttribute('data-id');

    Identity.close_modal({modal: modal});
  })

  // event for closing modal on overlay click
  delegate('click', '.overlay', function(event){
    if($(event.target).is('.modal, .js-no_dismiss') || $(event.target).parents('.modal').length > 0){
      event.stopPropagation();
      return true;
    }

    var modal = '#'+ this.getAttribute('data-id');

    Identity.close_modal({modal: modal});
  })

  /*

  Kit toggle tab

  */
  $( document ).on('click', '.js-toggle-tab', function(){
      var tab = this.getAttribute('data-id');
      var $tabs = $(this).parents('.tabs');
      var group = $tabs.getAttribute('id');

      $tabs.find('.js-toggle-tab').removeClass('tabs-toggle--is_active');
      $('.'+ group).find('.js-tabs-content').removeClass('tabs-content--is_active');

      $(this).addClass('tabs-toggle--is_active');
      $('#'+ tab).addClass('tabs-content--is_active');

      document.dispatchEvent(new CustomEvent("tab-toggled", { detail: { $elem: $('#'+ tab) } }));
  });

  /*

  Kit toggle accordion

  */

  delegate('click', '.js-toggle-accordion', function(event){
    var accordion = this.getAttribute('data-id');

    $(this).toggleClass('accordion--is_active');
    $('#'+ accordion).slideToggle(200);

    document.dispatchEvent(new CustomEvent("accordion-toggled", { detail: { $elem: $('#'+ accordion) } }));
  })

  /*

  Kit show_popover

  */

  Identity.show_popover = function(options){
    var settings = {
      popover: null
    };

    Object.assign(settings, options);

    $(settings.popover).addClass('popover--is_active');
    $('body').addClass('js-popover--is_active');

    document.dispatchEvent(new CustomEvent("popover-shown", { detail: { $elem: $(settings.popover) } }));
  };

  /*

  Kit hide_popover

  */

  Identity.hide_popover = function(options){
    var settings = {
      popover: null
    };

    Object.assign(settings, options);

    $(settings.popover).removeClass('popover--is_active');
    $('body').removeClass('js-popover--is_active');
    $(".popover_child--is_active").removeClass("popover_child--is_active");

    document.dispatchEvent(new CustomEvent("popover-hidden", { detail: { $elem: $(settings.popover) } }));
  };

  /*

  Kit hover popover

  */
  delegate('mouseenter', '.js-hover-popover', function(event){
    debugger;
    var popover = '#'+ this.getAttribute('data-id');

    $(event.currentTarget).addClass("popover_child--is_active");

    Identity.show_popover({popover: popover});
  });

  delegate('mouseleave', '.js-hover-popover', function(event){
    debugger;
    var popover = '#'+ this.getAttribute('data-id');

    Identity.hide_popover({popover: popover});
  });

  /*

  Kit click popover (and "hover" for mobile)

  */
  delegate('click', '.js-click-popover, .js-hover-popover', function(event){
    var popover = '#'+ this.getAttribute('data-id');

    $(event.currentTarget).addClass("popover_child--is_active");

    Identity.show_popover({popover: popover});
  });

  delegate('click', '.js-popover--is_active', function(event){
    if($(event.target).is('.popover') || $(event.target).parents('.popover').length > 0){
      event.stopPropagation();
      return true;
    }

    $('.popover--is_active').each(function(){
      Identity.hide_popover({popover: '#'+ this.getAttribute('id')});
    });

  });

  window.Identity = Identity;
})();
