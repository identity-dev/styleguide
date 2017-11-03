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
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(false)
          UI.show.click()
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(true)
        })
      })

      describe('with JS API', () => {
        it('should have an overlay with an overlay class', () => {
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(false)
          window.Identity.show_modal($('#UI.overlay.dataset.id'))
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(true)
        })
      })
    }) // Show

    describe('Close', () => {
      beforeEach(() => {
        UI.show.click()
      })

      describe('with HTML API', () => {
        it('should have an overlay with an overlay class', () => {
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(true)
          UI.hide.click()
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(false)
        })
      })

      describe('with JS API', () => {
        it('should have an overlay with an overlay class', () => {
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(true)
          window.Identity.close_modal($('#UI.overlay.dataset.id'))
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(false)
        })
      })
    }) // Close
  }) // Modal

  describe('Tab Toggle', () => {
    beforeEach(() => {
      fixture.load('kit/tab-toggle.html')
      UI = {
        tabs: {
          first: document.getElementById('tab-one'),
          second: document.getElementById('tab-two')
        },
        content: {
          first: document.getElementById('content-one'),
          second: document.getElementById('content-two')
        }
      }
    })

    afterEach(() => {
      fixture.cleanup()
      UI = {}
    })

    describe('Toggle', () => {
      describe('with HTML API', () => {
        it('should toggle classes on/off', () => {
          expect(hasClass(UI.tabs.first, 'tabs-toggle--is_active')).toBe(true)
          expect(hasClass(UI.tabs.second, 'tabs-toggle--is_active')).toBe(false)
          expect(hasClass(UI.tabs.first, 'tabs-toggle--is_active')).toBe(true)
          expect(hasClass(UI.tabs.second, 'tabs-toggle--is_active')).toBe(false)
          UI.tabs.second.click()
          expect(hasClass(UI.tabs.first, 'tabs-toggle--is_active')).toBe(false)
          expect(hasClass(UI.tabs.second, 'tabs-toggle--is_active')).toBe(true)
          expect(hasClass(UI.tabs.first, 'tabs-toggle--is_active')).toBe(false)
          expect(hasClass(UI.tabs.second, 'tabs-toggle--is_active')).toBe(true)
        })
      })
    })
  }) // Tab Toggle

  describe('Accordion', () => {
    beforeEach(() => {
      fixture.load('kit/accordion.html')
      UI = {
        toggle: document.getElementById('toggle'),
        content: document.getElementById('content')
      }
    })

    afterEach(() => {
      fixture.cleanup()
      UI = {}
    })

    describe('Toggle', () => {
      describe('with HTML API', () => {
        it('should toggle classes on/off', () => {
          expect(hasClass(UI.toggle, 'accordion--is_active')).toBe(false)
          expect(isHidden(UI.content)).toBe(true)
          UI.toggle.click()
          expect(hasClass(UI.toggle, 'accordion--is_active')).toBe(true)
          UI.toggle.click()
          expect(hasClass(UI.toggle, 'accordion--is_active')).toBe(false)
        })
      })
    })
  }) // Accordion

  describe('Popover', () => {
    beforeEach(() => {
      fixture.load('kit/popover.html')
      UI = {

      }
    })

    afterEach(() => {
      fixture.cleanup()
      UI = {}
    })

    describe('Show', () => {
      describe('with HTML API', () => {
        it('should have active class', () => {

        })
      })

      describe('with JS API', () => {
        it('should have active class', () => {

        })
      })
    })

    describe('Hide', () => {
      describe('with HTML API', () => {
        it('should have not active class', () => {

        })
      })

      describe('with JS API', () => {
        it('should have not active class', () => {

        })
      })
    })

    describe('Hover', () => {
      describe('with HTML API', () => {
        it('should have add/remove active class', () => {

        })
      })
    })

    describe('Click', () => {
      describe('with HTML API', () => {
        it('should have add/remove active class', () => {

        })
      })
    })
  }) // Popover
}) // Kit
