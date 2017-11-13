'use strict'

describe('Forms', () => {
  describe('Password', () => {
    beforeEach(() => {
      fixture.load('forms/password.html')
      window.Identity.forms.toggleShowPassword()

      UI = {
        toggle: document.getElementById('toggle'),
        field: document.getElementById('password')
      }
    })

    afterEach(() => {
      fixture.cleanup()
      UI = {}
    })

    describe('Toggle', () => {
      it('should add the active class', () => {
        expect(hasClass(UI.toggle, 'showing')).toBe(false)
        UI.toggle.click()
        expect(hasClass(UI.toggle, 'showing')).toBe(true)
        UI.toggle.click()
        expect(hasClass(UI.toggle, 'showing')).toBe(false)
      })

      it('should change the password field type', () => {
        expect(UI.field.type).toBe('password')
        UI.toggle.click()
        expect(UI.field.type).toBe('text')
        UI.toggle.click()
        expect(UI.field.type).toBe('password')
      })
    }) // Toggle

  }) // Toggle Show Password
}) // Kit
