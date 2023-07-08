```javascript
import { renderGenderRatioChart } from '../../src/frontend/visualization.js';
import { GenderRatio } from '../../src/data_analysis.py';

describe('Visualization Test Suite', () => {
  let genderRatioChart;
  let genderRatioData;

  beforeEach(() => {
    genderRatioChart = document.createElement('div');
    genderRatioChart.id = 'genderRatioChart';
    document.body.appendChild(genderRatioChart);

    genderRatioData = new GenderRatio(50, 40, 10);
  });

  afterEach(() => {
    document.body.removeChild(genderRatioChart);
  });

  test('renderGenderRatioChart function should render chart correctly', () => {
    renderGenderRatioChart(genderRatioData);
    expect(genderRatioChart.innerHTML).toContain('svg');
    expect(genderRatioChart.innerHTML).toContain('50% Male');
    expect(genderRatioChart.innerHTML).toContain('40% Female');
    expect(genderRatioChart.innerHTML).toContain('10% Non-binary');
  });
});
```