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
      it('should be empty', () => {
        expect(UI.picker.value).toBe('')
      })

      it('should have methods', () => {
        expect($(UI.picker).data('daterangepicker').setStartDate).not.toBe(undefined)
        expect($(UI.picker).data('daterangepicker').setEndDate).not.toBe(undefined)
      })

      it('should have defaults preloaded', () => {
        expect($(UI.picker).data('daterangepicker').startDate._d).not.toBe(undefined)
        expect($(UI.picker).data('daterangepicker').endDate._d).not.toBe(undefined)
      })

      it('sanity check that tests actually assert', () => {
        expect($(UI.picker).data('daterangepicker').startDate.foobar).toBe(undefined)
      })
    })
  }) // Show
}) // Kit
