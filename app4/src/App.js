import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this);
  }

getCars(){
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then((res) => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    const publishMe = JSON.stringify(this.state.cars)

    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {publishMe}
      </div>
    );

}
}


export default App;
