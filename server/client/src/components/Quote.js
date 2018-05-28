import React, { Component } from 'react';
import $ from 'jquery';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {quote: '', author: ''};
  }

  componentDidMount() {
    this.Quote();
    var quoteIntervalID = setInterval(this.Quote(), 43200000); //12 hours
    this.setState({quoteIntervalID: quoteIntervalID});
  }

  componentWillUnmount() {
     clearInterval(this.state.quoteIntervalID);
  }

  Quote() {
    $.getJSON('/api/quote')
      .then(({ contents }) => this.setState({ quote: contents.quotes[0].quote, author: contents.quotes[0].author }));
  }

  render() {
    const quote = this.state.quote;
    const author = this.state.author;
    return (
      <div>
        <p className='quote'> { quote }  -- { author }</p>
      </div>
    );
  }
}

export default Quote;
