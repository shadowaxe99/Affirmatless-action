```python
import time
from src.data_analysis import calculate_gender_ratio
from src.api_integration import import_rsvp_list

# Global variable to store the updated gender ratio
updated_ratio = None

def update_gender_ratio():
    global updated_ratio
    while True:
        # Import the latest RSVP list
        rsvp_list = import_rsvp_list()

        # Calculate the gender ratio
        gender_ratio = calculate_gender_ratio(rsvp_list)

        # Update the global variable
        updated_ratio = gender_ratio

        # Sleep for a while before the next update
        time.sleep(5)

if __name__ == "__main__":
    update_gender_ratio()
```