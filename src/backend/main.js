```javascript
const express = require('express');
const app = express();
const apiIntegration = require('./api_integration.js');
const dataProcessing = require('./data_processing.js');
const database = require('./database.js');

app.use(express.json());

app.get('/importRSVPList', async (req, res) => {
    try {
        const rsvpList = await apiIntegration.importRSVPList();
        await database.saveRSVPList(rsvpList);
        res.status(200).send('RSVP list imported successfully');
    } catch (error) {
        res.status(500).send('Error importing RSVP list');
    }
});

app.get('/calculateGenderRatio', async (req, res) => {
    try {
        const rsvpList = await database.getRSVPList();
        const genderRatio = dataProcessing.calculateGenderRatio(rsvpList);
        await database.saveGenderRatio(genderRatio);
        res.status(200).send('Gender ratio calculated successfully');
    } catch (error) {
        res.status(500).send('Error calculating gender ratio');
    }
});

app.get('/updateGenderRatio', async (req, res) => {
    try {
        const updatedRSVPList = await apiIntegration.importRSVPList();
        await database.saveRSVPList(updatedRSVPList);
        const updatedGenderRatio = dataProcessing.calculateGenderRatio(updatedRSVPList);
        await database.saveGenderRatio(updatedGenderRatio);
        res.status(200).send('Gender ratio updated successfully');
    } catch (error) {
        res.status(500).send('Error updating gender ratio');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```