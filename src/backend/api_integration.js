```javascript
const axios = require('axios');
const { RSVP } = require('./database.js');

const importRSVPList = async () => {
  try {
    const response = await axios.get('https://api.partiful.com/rsvp');
    const rsvpList = response.data;

    rsvpList.forEach(async (rsvp) => {
      const newRSVP = new RSVP({
        name: rsvp.name,
        gender: rsvp.gender,
        email: rsvp.email
      });

      await newRSVP.save();
    });

    console.log('RSVP list imported successfully.');
  } catch (error) {
    console.error('Error importing RSVP list:', error);
  }
};

module.exports = { importRSVPList };
```