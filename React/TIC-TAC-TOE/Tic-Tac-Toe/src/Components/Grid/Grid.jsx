import { useState } from "react"
import Card from "../Card/Card"
import "./Grid.css"

function isWinner(board,symbol){

    if(board[0]==board[1] && board[1]==board[2] && board[2]==symbol) return symbol;
    if(board[3]==board[4] && board[4]==board[5] && board[5]==symbol) return symbol;
    if(board[6]==board[7] && board[7]==board[8] && board[8]==symbol) return symbol;

    if(board[0]==board[3] && board[3]==board[6] && board[3]==symbol) return symbol;
    if(board[1]==board[4] && board[4]==board[7] && board[4]==symbol) return symbol;
    if(board[2]==board[5] && board[5]==board[8] && board[5]==symbol) return symbol;

    if(board[0]==board[4] && board[4]==board[8] && board[4]==symbol) return symbol;
    if(board[2]==board[4] && board[4]==board[6] && board[4]==symbol) return symbol;

    return "";
}


function Grid({numberOfCards}){
    const [turn,setTurn]=useState(true);
    const [board,setBoard]=useState(Array(numberOfCards).fill(""));
    const [winner,setWinner]=useState();

    function nextTurn(index){

        if(turn == true){
            board[index]="O"
        }
        else if(turn == false){
            board[index]="X" 
        }
        const win=isWinner(board,turn ? "O" : "X");
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return (
        <div>
            {
                winner && (
                    <>
                    <h1 className="color-highlight">Winner is {winner}</h1>
                    <button onClick={reset}>Reset Game</button>
                    </>
                )
            }
        <>
        <h1 className="color-highlight">Current Turn: {turn ? "O" : "X"} </h1>
        <div className="grid">
        {board.map((value,idx) => { return <Card turn={nextTurn} player={value} key={idx} index={idx} />}) }
        </div>
        </>
        </div>
    )
}

export default Grid