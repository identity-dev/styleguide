'use strict';


describe('Array', () => {
  describe('#indexOf()', () => {
    beforeEach(function() {
      fixture.load('kit/modal.html');
    });

    // remove the html fixture from the DOM
    afterEach(function() {
      fixture.cleanup();
    });
    it('should return -1 when the value is not present', () => {
    	document.getElementById('y').value = 2;
    	expect(document.getElementById('y').value).toBe('2');
    });

    it('works', () => {
      expect(true).toBe(true)
    })
  });
});
