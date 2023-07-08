```javascript
const assert = require('assert');
const main = require('../../backend/main.js');

describe('Backend Main', function() {
  describe('#importRSVPList()', function() {
    it('should import RSVP list without error', async function() {
      let rsvpList = await main.importRSVPList();
      assert(Array.isArray(rsvpList));
    });
  });

  describe('#calculateGenderRatio()', function() {
    it('should calculate gender ratio correctly', async function() {
      let rsvpList = await main.importRSVPList();
      let genderRatio = main.calculateGenderRatio(rsvpList);
      assert(genderRatio.hasOwnProperty('male'));
      assert(genderRatio.hasOwnProperty('female'));
      assert(genderRatio.hasOwnProperty('nonBinary'));
    });
  });

  describe('#updateGenderRatio()', function() {
    it('should update gender ratio in real-time', async function() {
      let rsvpList = await main.importRSVPList();
      let updatedRatio = main.updateGenderRatio(rsvpList);
      assert(updatedRatio.hasOwnProperty('male'));
      assert(updatedRatio.hasOwnProperty('female'));
      assert(updatedRatio.hasOwnProperty('nonBinary'));
    });
  });
});
```