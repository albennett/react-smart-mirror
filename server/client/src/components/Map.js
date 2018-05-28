import React, { Component } from 'react';
import $ from 'jquery'; 

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {map: []};
  }

  componentDidMount() {
    this.Map();
    var mapIntervalID = setInterval(this.Map(), 600000); //10 secs
    this.setState({mapIntervalID: mapIntervalID});
  }

  componentWillUnmount() {
     clearInterval(this.state.mapIntervalID);
  }


  Map() {
    $.getJSON('/api/map')
      .then(({ mapUrl }) => this.setState({ mapUrl: mapUrl }));
  }
  render() {
    const mapUrl = this.state.mapUrl;
    return (
      <div>
        <img width="600" id="map" src={ mapUrl } alt="Bing Map of 36.1658333,-86.7844444" />
      </div>
    );
  }
}

export default Map;
