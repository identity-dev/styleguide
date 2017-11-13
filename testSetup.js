fixture.setBase("test/fixtures")

var UI = {}

var hasClass = function(el, className){
  return [...el.classList].includes(className)
}

var isHidden = function(el) {
  return (el.offsetHeight === 0);
}

var isVisible = function(el) {
  return ! isHidden(el)
}
