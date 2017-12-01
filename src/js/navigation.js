window.Identity = window.Identity || {};

(function(){
  window.Identity.initNavigation = function(){
    $(document).on('click', '.js-mobile-nav-toggle', function(e){
      $(this).toggleClass('mobile-nav-toggle--is-active')
      $('body').toggleClass('mobile-nav-active');
    });
  }

  $(function(){
    window.Identity.initNavigation()
  }) // $(func)
})()
