import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

class Header extends React.Component {
    render() {
        return (
            <div className="HeaderContent">
                <h1>Heading yo</h1>
                <p>Hello this is a very basic test</p>
            </div>
        );
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className="BodyContent">
                <p>Main Body Content</p>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="Container">
                <div className="Header">
                    <Header />                    
                </div>

                <div className="Body">
                    <Body />
                </div>
            </div>

            // <div className="game">
            //         <div className="game-board">
            //           <Board />
            //         </div>
            //         <div className="game-info">
            //           <div>{/* status */}</div>
            //           <ol>{/* TODO */}</ol>
            //         </div>
            //       </div>

            // <button className="square" onClick={() => this.props.onClick()}>
            //     {this.props.value}
            // </button>
        );
    }
}
  
  // class Board extends React.Component {
  //   constructor(props) {
  //       super(props);
  //       this.state = {
  //       squares: Array(9).fill(null),
  //       };
  //   }

  //   renderSquare(i) {
  //       return (
  //           <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
  //         );
  //   }
  
  //   render() {
  //     const status = 'Next player: X';
  
  //     return (
  //       <div>
  //         <div className="status">{status}</div>
  //         <div className="board-row">
  //           {this.renderSquare(0)}
  //           {this.renderSquare(1)}
  //           {this.renderSquare(2)}
  //         </div>
  //         <div className="board-row">
  //           {this.renderSquare(3)}
  //           {this.renderSquare(4)}
  //           {this.renderSquare(5)}
  //         </div>
  //         <div className="board-row">
  //           {this.renderSquare(6)}
  //           {this.renderSquare(7)}
  //           {this.renderSquare(8)}
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  
  // class Game extends React.Component {
  //   render() {
  //     return (
  //       <div className="game">
  //         <div className="game-board">
  //           <Board />
  //         </div>
  //         <div className="game-info">
  //           <div>{/* status */}</div>
  //           <ol>{/* TODO */}</ol>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  
  // ========================================
  
  ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );
  
