'use strict';

describe('Kit', () => {
  describe('Modal', () => {
    beforeEach(() => {
      fixture.load('kit/modal.html');
    });

    afterEach(() => {
      fixture.cleanup();
      UI = {};
    });

    describe('Show', () => {
      beforeEach(() => {
        UI = {
          overlay: document.getElementById('js-modal'),
          show: document.getElementById('show'),
          hide: document.getElementById('hide')
        };
      })

      describe('with HTML API', () => {
        it('should have an overlay with an overlay class', () => {
          expect([...UI.overlay.classList].includes('overlay')).toBe(true);
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(false);
          UI.show.click();
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(true);
        });
      })

      describe('with JS API', () => {
        it('should have an overlay with an overlay class', () => {
          expect([...UI.overlay.classList].includes('overlay')).toBe(true);
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(false);
          window.Identity.show_modal($('#UI.overlay.dataset.id'))
          expect([...UI.overlay.classList].includes('overlay--is_active')).toBe(true);
        });
      })
    })
  });
});
