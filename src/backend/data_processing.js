```javascript
const RSVP = require('./database.js');

let genderRatio = {
  male: 0,
  female: 0,
  nonBinary: 0,
  undisclosed: 0
};

function calculateGenderRatio(rsvpList) {
  rsvpList.forEach(rsvp => {
    switch (rsvp.gender) {
      case 'male':
        genderRatio.male += 1;
        break;
      case 'female':
        genderRatio.female += 1;
        break;
      case 'non-binary':
        genderRatio.nonBinary += 1;
        break;
      default:
        genderRatio.undisclosed += 1;
    }
  });

  return genderRatio;
}

function updateGenderRatio(newRSVP) {
  switch (newRSVP.gender) {
    case 'male':
      genderRatio.male += 1;
      break;
    case 'female':
      genderRatio.female += 1;
      break;
    case 'non-binary':
      genderRatio.nonBinary += 1;
      break;
    default:
      genderRatio.undisclosed += 1;
  }

  return genderRatio;
}

module.exports = {
  calculateGenderRatio,
  updateGenderRatio
};
```