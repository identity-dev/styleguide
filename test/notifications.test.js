'use strict'

describe('Notifications', () => {
  window.Identity.initNotification()

  beforeEach(() => {
    fixture.load('forms/notifications.html')

    UI = {
      jar: document.getElementById('notifications'),
      bottle: document.getElementById('bottle')
    }
  })

  afterEach(() => {
    fixture.cleanup()
    UI.jar.innerHtml = ""
    UI.bottle.innerHtml = ""
    UI = {}
  })

  describe('Show', () => {
    describe('default notification', () => {
      beforeEach(() => {
        $(document).trigger("window:message")
        this.notification = document.querySelectorAll('.notification')[0]
      })

      it('should have the default message', () => {
        expect(this.notification.innerText.trim()).toEqual('Something generic has occurred and this message is informative.')
      })

      it('should be a success', () => {
        expect(hasClass(this.notification, 'notification--success')).toBe(true)
      })
    })

    describe('error notification, in the non-default container', () => {
      beforeEach(() => {
        $(document).trigger("window:message", {content: "Bad request", type: 'error', selector: UI.bottle})
        this.notification = document.querySelectorAll('.notification')[0]
      })

      it('should have the default message', () => {
        expect(this.notification.innerText.trim()).toEqual("Bad request")
      })

      it('should be a success', () => {
        expect(hasClass(this.notification, 'notification--error')).toBe(true)
      })
    })

  }) // Show

  describe('Remove', () => {
    beforeEach(() => {
      $(document).trigger("window:message")
      this.close = document.querySelectorAll('.notification-dismiss')[0]
    })

    it('should remove the message', (done) => {
      expect(UI.jar.hasChildNodes()).toBe(true)
      this.close.click()
      setTimeout(() =>{
        expect(UI.jar.hasChildNodes()).toBe(false)
        done()
      }, 250)

    })
  }) // Show
}) // Kit
