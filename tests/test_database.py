```python
import unittest
from src import database

class TestDatabase(unittest.TestCase):

    def setUp(self):
        self.db = database.Database()

    def test_insert_rsvp(self):
        rsvp = {"name": "Alex", "gender": "male", "email": "alex@example.com"}
        self.db.insert_rsvp(rsvp)
        self.assertIn(rsvp, self.db.rsvpList)

    def test_get_gender_ratio(self):
        rsvpList = [
            {"name": "Alex", "gender": "male", "email": "alex@example.com"},
            {"name": "Jennifer", "gender": "female", "email": "jennifer@example.com"},
            {"name": "Sam", "gender": "nonBinary", "email": "sam@example.com"}
        ]
        for rsvp in rsvpList:
            self.db.insert_rsvp(rsvp)
        genderRatio = self.db.get_gender_ratio()
        self.assertEqual(genderRatio, {"male": 1, "female": 1, "nonBinary": 1})

    def test_update_gender_ratio(self):
        rsvp = {"name": "Alex", "gender": "male", "email": "alex@example.com"}
        self.db.insert_rsvp(rsvp)
        self.db.update_gender_ratio()
        self.assertEqual(self.db.genderRatio, {"male": 1, "female": 0, "nonBinary": 0})

if __name__ == '__main__':
    unittest.main()
```