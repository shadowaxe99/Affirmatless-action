```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { importRSVPList, updateGenderRatio } from '../api_integration.js';
import { renderRSVPList, renderGenderRatioChart, renderRealTimeUpdates } from './user_interface.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rsvpList: [],
      genderRatio: {},
      updatedRatio: {}
    };
  }

  componentDidMount() {
    this.getRSVPList();
  }

  getRSVPList = async () => {
    const rsvpList = await importRSVPList();
    this.setState({ rsvpList });
    this.calculateGenderRatio();
  }

  calculateGenderRatio = async () => {
    const genderRatio = await updateGenderRatio(this.state.rsvpList);
    this.setState({ genderRatio });
  }

  render() {
    return (
      <div>
        <div id="rsvpListContainer">
          {renderRSVPList(this.state.rsvpList)}
        </div>
        <div id="genderRatioChart">
          {renderGenderRatioChart(this.state.genderRatio)}
        </div>
        <div id="realTimeUpdateContainer">
          {renderRealTimeUpdates(this.state.updatedRatio)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
```