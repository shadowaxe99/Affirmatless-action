```python
import unittest
from src import data_analysis

class TestDataAnalysis(unittest.TestCase):

    def setUp(self):
        self.rsvpList = [
            {"name": "Alex", "gender": "male", "email": "alex@example.com"},
            {"name": "Jennifer", "gender": "female", "email": "jennifer@example.com"},
            {"name": "Sam", "gender": "non-binary", "email": "sam@example.com"}
        ]

    def test_calculateGenderRatio(self):
        genderRatio = data_analysis.calculateGenderRatio(self.rsvpList)
        self.assertEqual(genderRatio, {"male": 1, "female": 1, "nonBinary": 1})

    def test_updateGenderRatio(self):
        updatedList = self.rsvpList + [{"name": "John", "gender": "male", "email": "john@example.com"}]
        updatedRatio = data_analysis.updateGenderRatio(updatedList)
        self.assertEqual(updatedRatio, {"male": 2, "female": 1, "nonBinary": 1})

if __name__ == '__main__':
    unittest.main()
```