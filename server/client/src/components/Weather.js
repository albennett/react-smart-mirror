import React, { Component } from 'react';
import $ from 'jquery';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {fiveDay: [], temperature: '', weather: ''};
  }

  componentDidMount() {
    this.Weather();
    var weatherIntervalID = setInterval(this.Weather(), 420000); //7 minutes
    this.setState({weatherIntervalID: weatherIntervalID});
  }

  componentWillUnmount() {
     clearInterval(this.state.weatherIntervalID);
  }

  Weather() {
    $.getJSON('/api/weather')
      .then(({ daily, currently }) => this.setState({ fiveDay: daily.data,
        temperature: parseInt(currently.temperature), weather: currently }));
  }

  render() {
    const temperature = this.state.temperature;
    const weather = this.state.weather;
    const fiveday = this.state.fiveDay.slice(0, 5).map((item, i) => (
       <div className="col card inline">
         <i className={`wi wi-forecast-io-${item.icon} skycon`}></i>
         <p className='high-low'>High<br> { item.temperatureMax }</br></p>
         <p className='high-low'>Low<br> { item.temperatureMin }</br></p>
       </div>
    ));
    return (
      <div>
        <p className='temp'>{ temperature }&deg;</p>
        <p className='summary'>{ weather.summary }</p>

        <div id="five-day-forecast">
          { fiveday }
        </div>
      </div>

    );
  }
}

export default Weather;
