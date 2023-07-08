```python
import requests
from src.database import RSVP

def importRSVPList():
    # Define the Partiful API endpoint
    partiful_api_endpoint = "https://api.partiful.com/rsvp"

    # Send a GET request to the Partiful API
    response = requests.get(partiful_api_endpoint)

    # If the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        rsvp_list = response.json()

        # For each RSVP in the list
        for rsvp in rsvp_list:
            # Create a new RSVP object
            new_rsvp = RSVP(name=rsvp['name'], gender=rsvp['gender'], email=rsvp['email'])

            # Save the new RSVP to the database
            new_rsvp.save()

        # Return the list of RSVPs
        return rsvp_list

    # If the request was not successful, raise an exception
    else:
        raise Exception("Failed to import RSVP list from Partiful API")
```