import React, { Component } from 'react';
import $ from 'jquery';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {news: []};
  }

  componentDidMount() {
    this.News();
    var newsIntervalID = setInterval(this.News(), 7200000); //2 hours
    this.setState({newsIntervalID: newsIntervalID});
  }

  componentWillUnmount() {
     clearInterval(this.state.newsIntervalID);
  }

  News() {
    $.getJSON('/api/news')
      .then(({ results }) => this.setState({ news: results }));
  }
  render() {
    const news = this.state.news.map((item, i) => (
       <div>
         <i className="fa fa-newspaper-o"></i><span className='news-title'>item.title</span>
       </div>
     ));
    return (
      <div id='titles'>
        { news }
      </div>
    );
  }
}

export default News;
