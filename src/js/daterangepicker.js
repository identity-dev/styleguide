window.Identity = window.Identity || {};
window.Identity.datePicker = window.Identity.datePicker || {};

(function(){

  window.Identity.datePicker.init = function(){
    var start = moment().subtract(29, 'days');
    var end = moment();

    $('.textfield--date-picker input').daterangepicker({
        startDate: start,
        endDate: end,
        buttonClasses: "btn btn--small btn--inline",
        cancelClass: "btn--secondary",
        ranges: {
           'Today': [moment(), moment()],
           'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           'Last 7 Days': [moment().subtract(6, 'days'), moment()],
           'Last 30 Days': [moment().subtract(29, 'days'), moment()],
           'This Month': [moment().startOf('month'), moment().endOf('month')],
           'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    });
  }

  window.Identity.datePicker.start = function(){
    return $('.textfield--date-picker input').val().split('-')[0].trim()
  }

  window.Identity.datePicker.end = function(){
    return $('.textfield--date-picker input').val().split('-')[1].trim()
  }

  $(function(){
    window.Identity.datePicker.init()
  })
})()
