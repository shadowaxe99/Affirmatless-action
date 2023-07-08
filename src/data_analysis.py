```python
import pandas as pd
from src.database import RSVP, GenderRatio

def importRSVPList():
    # Assuming Partiful API provides a CSV file
    rsvpList = pd.read_csv('path_to_csv_file_from_Partiful_API')
    return rsvpList

def calculateGenderRatio(rsvpList):
    gender_counts = rsvpList['gender'].value_counts()
    genderRatio = GenderRatio(male=gender_counts.get('male', 0),
                              female=gender_counts.get('female', 0),
                              nonBinary=gender_counts.get('nonBinary', 0))
    return genderRatio

def updateGenderRatio():
    rsvpList = importRSVPList()
    updatedRatio = calculateGenderRatio(rsvpList)
    return updatedRatio
```