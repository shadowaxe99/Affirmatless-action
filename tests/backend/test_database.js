```javascript
const assert = require('assert');
const { MongoClient } = require('mongodb');
const { rsvpList, genderRatio } = require('../../src/backend/database.js');

describe('Database Operations', function() {
  describe('#importRSVPList()', function() {
    it('should import RSVP list from Partiful without error', async function() {
      const result = await rsvpList.importRSVPList();
      assert.ok(result);
    });
  });

  describe('#storeGenderRatio()', function() {
    it('should store calculated gender ratio without error', async function() {
      const ratio = { male: 50, female: 50, nonBinary: 0 };
      const result = await genderRatio.storeGenderRatio(ratio);
      assert.ok(result);
    });
  });

  describe('#getGenderRatio()', function() {
    it('should retrieve stored gender ratio without error', async function() {
      const result = await genderRatio.getGenderRatio();
      assert.ok(result);
      assert.equal(typeof result.male, 'number');
      assert.equal(typeof result.female, 'number');
      assert.equal(typeof result.nonBinary, 'number');
    });
  });
});
```