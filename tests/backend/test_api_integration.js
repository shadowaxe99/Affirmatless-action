```javascript
const assert = require('assert');
const { importRSVPList } = require('../../src/backend/api_integration.js');

describe('API Integration Tests', function() {
  describe('#importRSVPList()', function() {
    it('should import RSVP list from Partiful', async function() {
      const rsvpList = await importRSVPList();
      assert(Array.isArray(rsvpList), 'RSVP list should be an array');
    });

    it('should contain required fields in each RSVP', async function() {
      const rsvpList = await importRSVPList();
      rsvpList.forEach(rsvp => {
        assert('name' in rsvp, 'Each RSVP should have a name field');
        assert('gender' in rsvp, 'Each RSVP should have a gender field');
        assert('email' in rsvp, 'Each RSVP should have an email field');
      });
    });
  });
});
```