import React, {Component} from 'react';
import './App.css';
import Row from './Components/Row/Row';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field: [
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0]
            ],
            playerToken: 1,
            winner: false
        };
    }

    setWinner = (token) => this.setState({winner: token})

    startNewGame = () => this.setState({field: [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
    ],
    playerToken: 1,
    winner: false
    })

    checkWinner = (token) => {
        this.checkVertical(token);
        this.checkHorizontal(token);
        this.checkDiagonalRight(token);
        this.checkDiagonalLeft(token);
    }

    checkVertical = (token) => {
        this.state.field.forEach((elementI) => {
            elementI.forEach((elementJ, index) => {
                (elementI[index] &&
                    elementI[index] === elementI[index + 1] &&
                    elementI[index] === elementI[index + 2] &&
                    elementI[index] === elementI[index + 3])
                    ? this.setWinner(token)
                    : false ;
            });
        });
    }

    checkHorizontal(token) {
        const {field} = this.state;
        field.forEach((elementI, i) => {
            elementI.forEach((elementJ, j) => {
                if (i < 5){
                    (field[i][j] &&
                        field[i][j] === field[i + 1][j] &&
                        field[i][j] === field[i + 2][j] &&
                        field[i][j] === field[i + 3][j])
                        ? this.setWinner(token)
                        : false;
                }
            });
        });
    }
    checkDiagonalRight(token) {
        const {field} = this.state;
        field.forEach((elementI, i) => {
            elementI.forEach((elementJ, j) => {
                if ( (i >= 3 && i <= 6) && (j>= 0 && j<=6) ) {
                    (field[i][j] &&
                        field[i][j] === field[i - 1][j + 1] &&
                        field[i][j] === field[i - 2][j + 2] &&
                        field[i][j] === field[i - 3][j + 3])
                        ? this.setWinner(token)
                        : false;
                }
            });
        });
    }

    checkDiagonalLeft(token) {
        const {field} = this.state;
        field.forEach((elementI, i) => {
            elementI.forEach((elementJ, j) => {
                if ( (i >= 3 && i <= 6) && (j>= 3 && j<= 7) ) {
                    (field[i][j] &&
                        field[i][j] === field[i - 1][j - 1] &&
                        field[i][j] === field[i - 2][j - 2] &&
                        field[i][j] === field[i - 3][j - 3])
                        ? this.setWinner(token)
                        : false;
                }
            });
        });
    }

    setPoint = (pushInRow ,token) => {
        this.setState({field: this.state.field.map((elementI, i ) => {
            return  elementI.map((elementJ, j) => {
                return !elementJ
                    ? i === pushInRow &&  (elementI[j+1] === undefined || elementI[j+1] ) ? token : this.state.field[i][j]
                    : this.state.field[i][j];
            });
        }),
        playerToken: token === 1 ? 2 : 1
        });
        setTimeout(() => {
            this.checkWinner(token);
        },10);

    }
    render() {
        return (
            <div className="connectFour">
                <button onClick={this.startNewGame}> New Game</button>
                <div className="game">
                    {this.state.field.map((el,index) => <Row key={index} playerToken={this.state.playerToken} row={el} setPoint={this.setPoint} rowId={index} />)}
                </div>
                <div>
                    {this.state.winner && <h1>Player {this.state.winner} Win</h1>}
                </div>
            </div>
        );
    }
}

export default App;
