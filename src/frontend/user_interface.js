```javascript
import React, { useEffect, useState } from 'react';
import { renderGenderRatioChart, renderRSVPList, renderRealTimeUpdates } from './visualization.js';

const UserInterface = () => {
  const [rsvpList, setRsvpList] = useState([]);
  const [genderRatio, setGenderRatio] = useState({});
  const [updatedRatio, setUpdatedRatio] = useState({});

  useEffect(() => {
    // Fetch RSVP list and gender ratio from backend
    fetch('/api/getRSVPList')
      .then(response => response.json())
      .then(data => setRsvpList(data));

    fetch('/api/getGenderRatio')
      .then(response => response.json())
      .then(data => setGenderRatio(data));

    // Set up real-time updates
    const eventSource = new EventSource('/api/realTimeUpdates');
    eventSource.onmessage = (event) => {
      const updatedData = JSON.parse(event.data);
      setUpdatedRatio(updatedData);
    };
  }, []);

  return (
    <div>
      <div id="rsvpListContainer">
        {renderRSVPList(rsvpList)}
      </div>
      <div id="genderRatioChart">
        {renderGenderRatioChart(genderRatio)}
      </div>
      <div id="realTimeUpdateContainer">
        {renderRealTimeUpdates(updatedRatio)}
      </div>
    </div>
  );
};

export default UserInterface;
```