```python
import unittest
from src.real_time_update import updateGenderRatio

class TestRealTimeUpdate(unittest.TestCase):

    def setUp(self):
        self.rsvpList = [
            {"name": "Alex", "gender": "male"},
            {"name": "Jennifer", "gender": "female"},
            {"name": "Sam", "gender": "non-binary"},
        ]
        self.genderRatio = {"male": 1, "female": 1, "non-binary": 1}

    def test_updateGenderRatio(self):
        newRSVP = {"name": "John", "gender": "male"}
        self.rsvpList.append(newRSVP)
        updatedRatio = updateGenderRatio(self.rsvpList, self.genderRatio)
        self.assertEqual(updatedRatio, {"male": 2, "female": 1, "non-binary": 1})

if __name__ == '__main__':
    unittest.main()
```