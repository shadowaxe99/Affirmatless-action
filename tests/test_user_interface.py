```python
import unittest
from unittest.mock import patch
from src import user_interface

class TestUserInterface(unittest.TestCase):

    @patch('src.user_interface.renderRSVPList')
    def test_render_rsvp_list(self, mock_render):
        mock_rsvp_list = [{'name': 'Alex', 'gender': 'Male'}, {'name': 'Jennifer', 'gender': 'Female'}]
        user_interface.renderRSVPList(mock_rsvp_list)
        mock_render.assert_called_with(mock_rsvp_list)

    @patch('src.user_interface.renderGenderRatioChart')
    def test_render_gender_ratio_chart(self, mock_render):
        mock_gender_ratio = {'male': 50, 'female': 50, 'nonBinary': 0}
        user_interface.renderGenderRatioChart(mock_gender_ratio)
        mock_render.assert_called_with(mock_gender_ratio)

    @patch('src.user_interface.renderRealTimeUpdates')
    def test_render_real_time_updates(self, mock_render):
        mock_updated_ratio = {'male': 45, 'female': 55, 'nonBinary': 0}
        user_interface.renderRealTimeUpdates(mock_updated_ratio)
        mock_render.assert_called_with(mock_updated_ratio)

if __name__ == '__main__':
    unittest.main()
```