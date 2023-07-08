```python
import unittest
from unittest.mock import patch
from src import api_integration

class TestAPIIntegration(unittest.TestCase):

    @patch('src.api_integration.requests.get')
    def test_importRSVPList(self, mock_get):
        mock_rsvp_list = [
            {'name': 'Alex', 'gender': 'Male', 'email': 'alex@example.com'},
            {'name': 'Jennifer', 'gender': 'Female', 'email': 'jennifer@example.com'},
            {'name': 'Sam', 'gender': 'Non-binary', 'email': 'sam@example.com'}
        ]
        mock_get.return_value.json.return_value = mock_rsvp_list

        rsvp_list = api_integration.importRSVPList()
        self.assertEqual(rsvp_list, mock_rsvp_list)

        mock_get.assert_called_once_with(api_integration.PARTIFUL_API_URL)

if __name__ == '__main__':
    unittest.main()
```