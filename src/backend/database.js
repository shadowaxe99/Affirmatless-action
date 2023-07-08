```javascript
const mongoose = require('mongoose');

const RSVPSchema = new mongoose.Schema({
  name: String,
  gender: String,
  email: String
});

const GenderRatioSchema = new mongoose.Schema({
  male: Number,
  female: Number,
  nonBinary: Number
});

const RSVP = mongoose.model('RSVP', RSVPSchema);
const GenderRatio = mongoose.model('GenderRatio', GenderRatioSchema);

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/genderRatioDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const saveRSVPList = async (rsvpList) => {
  try {
    await RSVP.insertMany(rsvpList);
    console.log('RSVP list saved to database...');
  } catch (err) {
    console.error(err.message);
  }
};

const saveGenderRatio = async (genderRatio) => {
  try {
    const newGenderRatio = new GenderRatio(genderRatio);
    await newGenderRatio.save();
    console.log('Gender ratio saved to database...');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  connectDB,
  saveRSVPList,
  saveGenderRatio
};
```