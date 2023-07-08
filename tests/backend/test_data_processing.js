```javascript
const assert = require('assert');
const { calculateGenderRatio } = require('../../src/backend/data_processing.js');

describe('Data Processing', function() {
  describe('#calculateGenderRatio()', function() {
    it('should calculate the correct gender ratio', function() {
      const rsvpList = [
        { name: 'Alex', gender: 'male' },
        { name: 'Jennifer', gender: 'female' },
        { name: 'Sam', gender: 'non-binary' },
        { name: 'John', gender: 'male' },
        { name: 'Emma', gender: 'female' },
      ];

      const expectedRatio = {
        male: 2,
        female: 2,
        nonBinary: 1,
      };

      const actualRatio = calculateGenderRatio(rsvpList);
      assert.deepStrictEqual(actualRatio, expectedRatio);
    });

    it('should handle empty RSVP list', function() {
      const rsvpList = [];

      const expectedRatio = {
        male: 0,
        female: 0,
        nonBinary: 0,
      };

      const actualRatio = calculateGenderRatio(rsvpList);
      assert.deepStrictEqual(actualRatio, expectedRatio);
    });
  });
});
```