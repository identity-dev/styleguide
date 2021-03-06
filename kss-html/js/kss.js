$(function(){
  $('.example-code').each(function(){
      var example = $(this).children('.prettyprint').not('.no-copy').html();
      $(this).prev('.example-demo').html(example);
  });

  $(document).on('click', '.example-toggle', function(){
    $(this)
      .toggleClass('is-active')
      .prev()
        .slideToggle(200);
  });

  $(document).on('click', '.js-show-modal', function(){
    $('#navigation').addClass('overlay--is_active');
  })

  $(document).on('click', '.js-close-modal', function(){
    $('#navigation').removeClass('overlay--is_active');
  })

  $('.color-cube').each(function(){
    var bgc = $(this).attr('class').split(" ")[1];
    var hex = rgb2hex($(this).css('background-color'));

    $(this).append("<span>"+ bgc + ": <br/>"+ hex +"</span>");
  });

  $(function(){
    $("form").on('submit', function(e){
      e.preventDefault();
    });
  });
});

var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }
