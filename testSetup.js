fixture.setBase("test/fixtures")

var UI = {}

var hasClass = function(el, className){
  return [...el.classList].includes(className)
}

var isHidden = function(el) {
  var style = window.getComputedStyle(el);
  return (style.display === 'none')
}
