import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import User from './User';

class App extends Component{


    render(){
    return (
      <div className="App">
        <header className="App-header">
          <nav className="nav-main">
            <img src="C:\WEBDEV\sequilize_ntlm\client\public\logo192.png" alt="test"></img>
            <a href="#">Punkt1</a><a href="#">Punkt2</a><a href="#">Punkt3</a>
            
            </nav>
        </header>
        <body>
        <User />
        


      </body>
      </div>
    );
  }

}
export default App;
