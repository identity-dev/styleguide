window.Identity = window.Identity || {};
window.Identity.datePicker = window.Identity.datePicker || {};

(function(){

  window.Identity.datePicker.set = function(start, end, label, params){
    $('.textfield--date-picker input').val(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'))
    $('.textfield--date-picker input').trigger("changed.daterangepicker", $('.textfield--date-picker input'));
  }

  window.Identity.datePicker.init = function(){
    $('.textfield--date-picker input').daterangepicker({
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        autoUpdateInput: false,
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
      }, window.Identity.datePicker.set)
    }

  $(function(){
    window.Identity.datePicker.init()
  })
})()
