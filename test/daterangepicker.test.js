'use strict'

describe('Date Range Picker', () => {
  beforeEach(() => {
    fixture.load('daterangepicker/date-picker.html')
    window.Identity.datePicker.init()
  })

  afterEach(() => {
    fixture.cleanup()
    UI = {}
  })

  describe('Show', () => {
    describe('initialization', () => {
      it('should have a start date set', () => {
        expect(window.Identity.datePicker.start()).toEqual(moment().subtract(29, 'days').format('MM/DD/YYYY'))
      })

      it('should have an end date set', () => {
        expect(window.Identity.datePicker.end()).toEqual(moment().format('MM/DD/YYYY'))
      })
    })
  }) // Show
}) // Kit
