import React from 'react';
import './chess.css';
import Board from './board.js';
// import King from '../pieces/king';


// import FallenSoldierBlock from './fallen-soldier-block.js';
import initialiseChessBoard from './helpers/board-initialiser.js';

export default class Chess extends React.Component {
    constructor() {
      super();
      this.state = {
        squares: initialiseChessBoard(),
        whiteFallenSoldiers: [],
        blackFallenSoldiers: [],
        player: 1,
        sourceSelection: -1,
        status: '',
        turn: 'white'
      }
    }

    render() {

        return (
          <div>
          <div className="game">
            <div className="game-board">
              <Board
                squares={this.state.squares}
                // onClick={(i) => this.handleClick(i)}
              />
            </div>
            <div className="game-info">
              <h3>Turn</h3>
              <div id="player-turn-box" style={{ backgroundColor: this.state.turn }}>
  
              </div>
              <div className="game-status">{this.state.status}</div>
  
              <div className="fallen-soldier-block">
  
                {/* {<FallenSoldierBlock
                  whiteFallenSoldiers={this.state.whiteFallenSoldiers}
                  blackFallenSoldiers={this.state.blackFallenSoldiers}
                />
                } */}
              </div>
  
            </div>
          </div>
        </div>
    
    
        );
      }
}