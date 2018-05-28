import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = { time: '', getDay: '', date: ''};
  }

  componentDidMount() {
    this.Date();
    var dateIntervalID = setInterval(this.Date(), 2000); //2 secs
    this.setState({dateIntervalID: dateIntervalID});
  }

  componentWillUnmount() {
     clearInterval(this.state.dateIntervalID);
  }

  Date() {
    let date = moment().format('MMMM Do')
    let d = new Date();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let getDay = weekday[d.getDay()];
    let time = moment().format('LT');

    this.setState({ time: time, getDay: getDay, date: date })
  }

  render() {
    const time = this.state.time;
    const getDay = this.state.getDay;
    const date = this.state.date;

    return (
      <div>
        <h1 className='time'>{ time }</h1>
        <p className='day'>{ getDay }</p>
        <p className='date'>{ date }</p>
      </div>
    );
  }
}

export default Date;
