'use strict'

describe('Kit', () => {
  describe('Modal', () => {
    beforeEach(() => {
      fixture.load('kit/modal.html')
      UI = {
        overlay: document.getElementById('js-modal'),
        show: document.getElementById('show'),
        hide: document.getElementById('hide')
      }
    })

    afterEach(() => {
      fixture.cleanup()
      UI = {}
    })

    describe('Show', () => {
      describe('with HTML API', () => {
        it('should have an overlay with an overlay class', () => {
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(false)
          UI.show.click()
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(true)
        })
      })

      describe('with JS API', () => {
        it('should have an overlay with an overlay class', () => {
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(false)
          window.Identity.show_modal($('#UI.overlay.dataset.id'))
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(true)
        })
      })
    }) // Show

    describe('Close', () => {
      beforeEach(() => {
        UI.show.click()
      })

      describe('with HTML API', () => {
        it('should have an overlay with an overlay class', () => {
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(true)
          UI.hide.click()
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(false)
        })
      })

      describe('with JS API', () => {
        it('should have an overlay with an overlay class', () => {
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(true)
          window.Identity.close_modal($('#UI.overlay.dataset.id'))
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(false)
        })
      })
    }) // Close
  }) // Modal

  describe('Tab Toggle', () => {
    beforeEach(() => {
      fixture.load('kit/tab-toggle.html')
      UI = {
        tabs: [
          document.getElementById('tab-one'),
          document.getElementById('tab-two')
        ],
        content: [
          document.getElementById('content-one'),
          document.getElementById('content-two')
        ]
      }
    })

    afterEach(() => {
      fixture.cleanup()
      UI = {}
    })

    describe('Toggle', () => {
      describe('with HTML API', () => {
        it('should have toggle classes on/off', () => {
          expect([...UI.tabs[0].classList].includes('tabs-toggle--is_active')).toBe(true)
          expect([...UI.tabs[1].classList].includes('tabs-toggle--is_active')).toBe(false)
          expect([...UI.content[0].classList].includes('tabs-content--is_active')).toBe(true)
          expect([...UI.content[1].classList].includes('tabs-content--is_active')).toBe(false)
          UI.tabs[1].click()
          expect([...UI.tabs[0].classList].includes('tabs-toggle--is_active')).toBe(false)
          expect([...UI.tabs[1].classList].includes('tabs-toggle--is_active')).toBe(true)
          expect([...UI.content[0].classList].includes('tabs-content--is_active')).toBe(false)
          expect([...UI.content[1].classList].includes('tabs-content--is_active')).toBe(true)
        })
      })
    })
  }) // Tab Toggle
}) // Kit
