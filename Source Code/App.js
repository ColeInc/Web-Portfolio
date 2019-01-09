import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>yo yo yo its ya boy cole</p>
          <a
            className="App-link"
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          > Link1 </a>
        </header>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for {this.props.name}</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }

export default App;
