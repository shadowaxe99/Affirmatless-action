```javascript
import { renderRSVPList, renderGenderRatioChart, renderRealTimeUpdates } from '../../src/frontend/user_interface.js';
import { rsvpList, genderRatio, updatedRatio } from '../../src/shared_variables.js';

describe('User Interface Tests', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="rsvpListContainer"></div>
      <div id="genderRatioChart"></div>
      <div id="realTimeUpdateContainer"></div>
    `;
  });

  test('renderRSVPList correctly displays RSVP list', () => {
    renderRSVPList(rsvpList);
    const rsvpListContainer = document.getElementById('rsvpListContainer');
    expect(rsvpListContainer.textContent).toContain(rsvpList[0].name);
  });

  test('renderGenderRatioChart correctly displays gender ratio chart', () => {
    renderGenderRatioChart(genderRatio);
    const genderRatioChart = document.getElementById('genderRatioChart');
    expect(genderRatioChart.textContent).toContain(genderRatio.male);
    expect(genderRatioChart.textContent).toContain(genderRatio.female);
    expect(genderRatioChart.textContent).toContain(genderRatio.nonBinary);
  });

  test('renderRealTimeUpdates correctly displays real-time updates', () => {
    renderRealTimeUpdates(updatedRatio);
    const realTimeUpdateContainer = document.getElementById('realTimeUpdateContainer');
    expect(realTimeUpdateContainer.textContent).toContain(updatedRatio.male);
    expect(realTimeUpdateContainer.textContent).toContain(updatedRatio.female);
    expect(realTimeUpdateContainer.textContent).toContain(updatedRatio.nonBinary);
  });
});
```