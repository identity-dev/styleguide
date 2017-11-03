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
        it('should add the active class', () => {
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(false)
          UI.show.click()
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(true)
        })
      })

      describe('with JS API', () => {
        it('should add the active class', () => {
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
        it('should remove the active class', () => {
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(true)
          UI.hide.click()
          expect(hasClass(UI.overlay, 'overlay--is_active')).toBe(false)
        })
      })

      describe('with JS API', () => {
        it('should remove the active class', () => {
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
        it('should toggle classes on/off', (done) => {
          expect(hasClass(UI.toggle, 'accordion--is_active')).toBe(false)
          expect(isHidden(UI.content)).toBe(true)
          UI.toggle.click()
          expect(hasClass(UI.toggle, 'accordion--is_active')).toBe(true)
          expect(isVisible(UI.content)).toBe(true)
          UI.toggle.click()
          expect(hasClass(UI.toggle, 'accordion--is_active')).toBe(false)
          setTimeout(() => {
            expect(isHidden(UI.content)).toBe(true)
            done();
          }, 201);
        })
      })
    })
  }) // Accordion

  describe('Popover', () => {
    beforeEach(() => {
      fixture.load('kit/popover.html')
      UI = {
        triggers: {
          hover: document.getElementById('hover'),
          click: document.getElementById('click')
        },
        popovers: {
          hover: document.getElementById('hover-popover'),
          click: document.getElementById('click-popover')
        }
      }
    })

    afterEach(() => {
      fixture.cleanup()
      UI = {}
    })

    describe('Show', () => {
      describe('with HTML API', () => {
        describe('Mouse Enter', () => {
          afterEach(() => {
            window.Identity.hide_popover({popover: UI.popovers.hover})
          })

          it('should add the active class', () => {
            expect(hasClass(UI.popovers.hover, 'popover--is_active')).toBe(false)
            $(UI.triggers.hover).trigger('mouseenter')
            expect(hasClass(UI.popovers.hover, 'popover--is_active')).toBe(true)
          })
        }) // Mouse Enter

        describe('Click', () => {
          afterEach(() => {
            window.Identity.hide_popover({popover: UI.popovers.click})
          })

          it('should add the active class', () => {
            expect(hasClass(UI.popovers.click, 'popover--is_active')).toBe(false)
            UI.triggers.click.click()
            expect(hasClass(UI.popovers.click, 'popover--is_active')).toBe(true)
          })
        }) // Click
      })

      describe('with JS API', () => {
        afterEach(() => {
          window.Identity.hide_popover({popover: UI.popovers.click})
        })

        it('should add the active class', () => {
          expect(hasClass(UI.popovers.click, 'popover--is_active')).toBe(false)
          window.Identity.show_popover({popover: UI.popovers.click})
          expect(hasClass(UI.popovers.click, 'popover--is_active')).toBe(true)
        })
      })
    })

    describe('Hide', () => {
      describe('with HTML API', () => {
        describe('Mouse Leave', () => {
          beforeEach(() => {
            window.Identity.show_popover({popover: UI.popovers.hover})
          })

          it('should remove the active class', () => {
            expect(hasClass(UI.popovers.hover, 'popover--is_active')).toBe(true)
            $(UI.triggers.hover).trigger('mouseleave')
            expect(hasClass(UI.popovers.hover, 'popover--is_active')).toBe(false)
          })
        }) // Mouse Leave

        describe('Click', () => {
          beforeEach(() => {
            window.Identity.show_popover({popover: UI.popovers.click})
          })

          it('should remove the active class', () => {
            expect(hasClass(UI.popovers.click, 'popover--is_active')).toBe(true)
            UI.triggers.click.click()
            expect(hasClass(UI.popovers.click, 'popover--is_active')).toBe(false)
          })
        }) // Click
      })

      describe('with JS API', () => {
        beforeEach(() => {
          window.Identity.show_popover({popover: UI.popovers.click})
        })

        it('should remove the active class', () => {
          expect(hasClass(UI.popovers.click, 'popover--is_active')).toBe(true)
          window.Identity.hide_popover({popover: UI.popovers.click})
          expect(hasClass(UI.popovers.click, 'popover--is_active')).toBe(false)
        })
      })
    })
  }) // Popover
}) // Kit
