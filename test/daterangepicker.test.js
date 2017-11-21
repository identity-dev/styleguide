'use strict'

describe('Date Range Picker', () => {
  beforeEach(() => {
    fixture.load('daterangepicker/date-picker.html')
    window.Identity.datePicker.init();
    UI = {
      picker: document.getElementById('picker')
    }
  })

  afterEach(() => {
    fixture.cleanup()
    UI = {}
  })

  describe('Show', () => {
    describe('initialization', () => {
      it('should have a start date set', () => {
        expect(UI.picker.value.split('-')[0].trim()).toEqual(moment().subtract(29, 'days').format('MM/DD/YYYY'))
      })

      it('should have an end date set', () => {
        expect(UI.picker.value.split('-')[1].trim()).toEqual(moment().format('MM/DD/YYYY'))
      })
    })
  }) // Show
}) // Kit
