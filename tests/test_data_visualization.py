```python
import unittest
from src import data_visualization

class TestDataVisualization(unittest.TestCase):

    def setUp(self):
        self.rsvpList = [
            {"name": "Alex", "gender": "male"},
            {"name": "Jennifer", "gender": "female"},
            {"name": "Sam", "gender": "non-binary"},
        ]
        self.genderRatio = {"male": 1, "female": 1, "non-binary": 1}

    def test_visualizeGenderRatio(self):
        chart = data_visualization.visualizeGenderRatio(self.genderRatio)
        self.assertIsNotNone(chart)

    def test_renderGenderRatioChart(self):
        chartContainer = data_visualization.renderGenderRatioChart(self.genderRatio)
        self.assertIsNotNone(chartContainer)

if __name__ == '__main__':
    unittest.main()
```