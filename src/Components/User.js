import React, { Component } from 'react';
import "../styles/App.css";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      apiResponse: "",
      valueName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.state.setState({valueName: event.target.value})
  }
  

  componentDidMount(err) {
      console.log("im mounted BAHHHHHHH");
    fetch('/add')
      .then(res => res.json())
      .then(apiResponse => this.setState({apiResponse}, () => console.log('Customers fetched...', apiResponse)))
      .catch(err, console.log(err));
    }

  render() {
    return (
      <div className="mainWindow">
        <div className="loginWindow">
        <h2>Customers</h2>
        <form action=""> 
          <div>
          <label>Benutzername</label>
          <input type="text" value={this.state.valueName} onChange={this.handleChange} style={{color:"#b3b2af"}}/>
          <label>Passwort</label>
          <input type="text" value="Geben sie Ihren Benutzernamen ein"  style={{color:"#b3b2af"}}/>
          <input type="submit" value="Anmelden" />
          </div>
        </form>
        <a href="#">noch kein Account? Regestrieren</a>        {this.state.apiResponse}
        </div>
      </div>
    );
  }
}

export default Customers;