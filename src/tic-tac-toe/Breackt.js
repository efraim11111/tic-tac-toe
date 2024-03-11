import React, { useEffect } from 'react'
import GameState from './GameState'
import Borad from './Borad'
import { useState } from 'react'
import { forEach, set } from 'lodash'
import GameOver from './GameOver'
import Reset from './Reset'

import exports from 'react'
const playerX = "X"
const playerO = "O"
const winingCombo = [
    {combo:[0,1,2],strikeClass:"strike-row-1"},
    {combo:[3,4,5],strikeClass:"strike-row-2"},
    {combo:[6,7,8],strikeClass:"strike-row-3"},

    {combo:[0,3,6],strikeClass:"strike-column-1"},
    {combo:[1,4,7],strikeClass:"strike-column-2"},
    {combo:[2,5,8],strikeClass:"strike-column-3"},

    {combo:[0,4,8],strikeClass:"strike-diagonal-1"},
    {combo:[2,4,6],strikeClass:"strike-diagonal-2"},
]
const isWinningState=(tiles,player)=>{
  winingCombo.forEach(({combo,strikeClass}) => {
  const value1 = tiles[combo[0]];
  const value2 = tiles[combo[1]];
  const value3 = tiles[combo[2]];
  if(value1 !=null &&value1 == value2 && value1==value3){
    
    if(value1==player) {return true;
    }
  }
  
   
})
 const drawChack = tiles.every(tile => tile!=null)
if(drawChack){
    return true;
}}

const countSymbols = (tiles, symbol) => {
  // Use the reduce method to count the occurrences of the symbol in the tiles array
  return tiles.reduce((count, tile) => {
    // Increment the count if the current tile matches the symbol
    return tile === symbol ? count + 1 : count;
  }, 0); // Start with a count of 0
};

const checkWin = (tiles,setStrike,setGameState)=>
{
    winingCombo.forEach(({combo,strikeClass}) => {
        const value1 = tiles[combo[0]];
        const value2 = tiles[combo[1]];
        const value3 = tiles[combo[2]];
        if(value1 !=null &&value1 == value2 && value1==value3){
            setStrike(strikeClass)
            if(value1==playerX) {setGameState(GameState.playerXWon);
            }  else setGameState(GameState.playerOWon);
          
           
        }
        const drawChack = tiles.every(tile => tile!=null)
        if(drawChack){
            setGameState(GameState.draw)
        }
        
    });


}


const Breackt = () => {
    const [gameState,setGameState] =useState(GameState.inProgress);
    const [strike,setStrike] = useState();
    const [tiles , setTeils]= useState(Array(9).fill(null));
    const [playerTurn,setPlayerTurn] = useState(playerX);
    const [botTurn,setBotTurn] = useState();
    
  
    useEffect(()=>{
        checkWin(tiles,setStrike,setGameState); 
       
         
  
    },[tiles]);
    useEffect(()=>{
        if(playerO==playerTurn){
        const newTile = [...tiles];
        const minimax = (depth, maximizingPlayer, newTile) => {
         
            // Base case: If the game is over or the maximum depth is reached, return the heuristic value
            if (depth === 0) {
              return evaluate(newTile); // Calculate and return the heuristic value based on the current state of the game
            }
          
            if (maximizingPlayer) {
              let bestValue = -Infinity;
              for (let move of getAvailableMoves(newTile)) {
                console.log(bestValue+"sart of maxplayer");
                // Make the move on the board (assuming newTile is the game board)
                makeMove(newTile, move, 'O'); // Update the game state with the move
                let value = minimax(depth - 1, false, newTile); // Recursively call minimax with the new board state and switch to the opponent's turn
                undoMove(newTile, move); // Undo the move to revert the game state (if necessary)
                bestValue = Math.max(bestValue, value);
              }
              return bestValue;
            } else {
              let bestValue = Infinity;
              for (let move of getAvailableMoves(newTile)) {
                console.log(bestValue+"sart of minplayer");
                // Make the move on the board (assuming newTile is the game board)
                makeMove(newTile, move, 'X'); // Update the game state with the move
                let value = minimax(depth - 1, true, newTile); // Recursively call minimax with the new board state and switch to the maximizing player's turn
                console.log(value+"      the current value");
                undoMove(newTile, move); // Undo the move to revert the game state (if necessary)                
                bestValue = Math.min(bestValue, value);
                console.log(bestValue+"      the current besdtttttttttvalue");
              }
              return bestValue;
            }
          };         
          // Helper functions (replace these with your game-specific logic)          
          // Returns a list of available moves for the current state of the game
          const getAvailableMoves = (newTile) => {
            
           const availableMoves = newTile.map((value, index) => 
            (value === null ? index : null)).filter((value) => value !== null)
          
           console.log(availableMoves);
           return availableMoves;
          };
          
          // Updates the game state with the specified move for the given player
          const makeMove = (newTile, move, player) => {
            // Implement logic to make a move on the game board
            
            newTile[move]=player;
            console.log(newTile+" the array after the move "+move);
          };
          
          // Undoes the specified move to revert the game state
          const undoMove = (newTile, move) => {
            
            newTile[move] = null;
            console.log(newTile+" the array after the unmove "+move);
          };
          
          // Calculates the heuristic value of the current state of the game
          const evaluate = (newTile) => {
            if (isWinningState(newTile, 'X')) {
              return 10; // AI wins
            } else if (isWinningState(newTile, 'O')) {
              return -10; // Opponent wins
            } else if (isWinningState(newTile)) {
              return 0; // Draw
            } else {
              // Calculate a simple heuristic based on the number of X's minus the number of O's
              return countSymbols(newTile, 'X') - countSymbols(newTile, 'O');
            }
          };   

          // Usage example:   
          
        const bestMoveValue = minimax(5, true, newTile); // Assuming a maximum depth of 3 and the current player is maximizing
        
        console.log(bestMoveValue+" best move over hererehrerererererererere"); // Output: the best move value based on the minimax algorithm
               
              tiles[bestMoveValue] = "O"
              setTeils(tiles) 
              

    if(playerTurn === playerX){
        setPlayerTurn(playerO)

    } else{
        setPlayerTurn(playerX)
    } 
        }
    },[playerTurn])

    const TileClick = (index) =>{
        if(gameState!=GameState.inProgress)return;
        if(playerX==playerTurn){
        
        if(tiles[index]!=null)return;
      
        const newTile = [...tiles];
        newTile[index] = playerTurn; 
        setTeils(newTile);
      
    }

         
   
         if(playerTurn === playerX){
            setPlayerTurn(playerO)

        } else{
            setPlayerTurn(playerX)
        } 
        
      
    }
    const onClick = () =>{
        setTeils(Array(9).fill(null))
        setGameState(GameState.inProgress)
        setPlayerTurn(playerX)
        setStrike(null)

    }
    

  return (
    <div className='' style={{}}>
        <h2>TIC TAC TOE</h2>
        <Borad strike={strike} playerTurn={playerTurn} tiles={tiles} onTileClick={TileClick}/>
        <GameOver gameState={gameState}/>
        <Reset onClick={onClick} />
    </div>
  )
}

export default Breackt;