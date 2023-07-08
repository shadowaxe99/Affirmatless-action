```javascript
import Chart from 'chart.js';

let genderRatioChart;

export function visualizeGenderRatio(genderRatio) {
  const ctx = document.getElementById('genderRatioChart').getContext('2d');

  if (genderRatioChart) {
    genderRatioChart.destroy();
  }

  genderRatioChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Male', 'Female', 'Non-binary'],
      datasets: [{
        data: [genderRatio.male, genderRatio.female, genderRatio.nonBinary],
        backgroundColor: ['#3498db', '#e74c3c', '#9b59b6'],
      }],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Gender Ratio'
      },
    },
  });
}
```