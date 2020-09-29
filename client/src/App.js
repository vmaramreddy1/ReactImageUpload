import React, { Component } from 'react';
import './App.css';
import Upload from "./components/upload/Upload";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  // callAPI() {
  //   fetch("http://localhost:9000/image-server-api")
  //       .then(res => res.text())
  //       .then(res => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //   this.callAPI();
  // } 

  render(){
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React !</h1>
        </header>
      <p className="App-intro">{this.state.apiResponse}</p> */}
      <div className="Card">
          <Upload />
      </div>
      </div>
    );
  }
}

export default App;
