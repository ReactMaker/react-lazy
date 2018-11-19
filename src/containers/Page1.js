import React, { Component } from 'react';
import moment from 'moment';

export default class Home extends Component {
  state = {
    now: moment().format('YYYY-MM-DD hh:mm:ss')
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: moment().format('YYYY-MM-DD hh:mm:ss')
      });
    }, 1000);
  }

  render() {
    const { now } = this.state;

    return (
      <div>
        Time: {now}
      </div>
    );
  }
}
