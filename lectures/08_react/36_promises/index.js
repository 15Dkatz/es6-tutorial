import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}
const api_key = '8ed066dab74f94bcc931774f0e5fab2c';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'San Francisco',
      description: ''
    }
  }

  componentDidMount() {
    this.grabWeather(this.state.city);
  }

  grabWeather(city) {
    // returns a string representing the current weather
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
      .then(response => response.json())
      .then(json => {
        this.setState({description: json.weather[0].description});
      });
  }

  render() {
    return (
      <div>
        <h1>Weather Report for {this.state.city}!</h1>
        <h2>{this.state.description}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
)
