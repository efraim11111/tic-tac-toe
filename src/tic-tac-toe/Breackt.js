import React, { useEffect } from 'react'
import GameState from './GameState'
import Borad from './Borad'
import { useState } from 'react'
import GameOver from './GameOver'
import Reset from './Reset'

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

const isWinningState = (tiles, player) => {
  for (const { combo } of winingCombo) {
    const [a, b, c] = combo;
    if (tiles[a] === player && tiles[b] === player && tiles[c] === player) {
      return true;
    }
  }

  return tiles.every(tile => tile !== null);
}

const checkWin = (tiles, setStrike, setGameState) => {
  for (const { combo, strikeClass } of winingCombo) {
    const [a, b, c] = combo;
    const value1 = tiles[a];
    const value2 = tiles[b];
    const value3 = tiles[c];
    if (value1 !== null && value1 === value2 && value1 === value3) {
      setStrike(strikeClass)
      if (value1 === playerX) {
        setGameState(GameState.playerXWon);
      } else {
        setGameState(GameState.playerOWon);
      }
      return;
    }
  }

  const drawChack = tiles.every(tile => tile !== null)
  if (drawChack) {
    setGameState(GameState.draw)
  }
}

const Breackt = () => {
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [strike, setStrike] = useState();
  const [tiles, setTeils] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(playerX);

  useEffect(() => {
    checkWin(tiles, setStrike, setGameState);
  }, [tiles]);

  useEffect(() => {
    if (playerO === playerTurn) {
      const newTiles = [...tiles];
      const bestMove = minimax(newTiles, playerO, 0, true);
      newTiles[bestMove.index] = playerO;
      setTeils(newTiles);
      setPlayerTurn(playerX);
    }
  }, [playerTurn]);
  
  const minimax = (tiles, player, depth, maximizingPlayer) => {
    const opponent = player === playerX ? playerO : playerX;
    const winner = getWinner(tiles, player, opponent);
  
    if (winner === player) {
      return { score: 10 - depth };
    } else if (winner === opponent) {
      return { score: depth - 10 };
    } else if (tiles.every(tile => tile !== null)) {
      return { score: 0 };
    }
  
    if (maximizingPlayer) {
      let bestScore = -Infinity;
      let bestMove = {};
      const newTiles = [...tiles];
  
      for (let i = 0; i < newTiles.length; i++) {
        if (newTiles[i] === null) {
          newTiles[i] = player;
          const { score } = minimax(newTiles, player, depth + 1, false);
          newTiles[i] = null;
  
          if (score > bestScore) {
            bestScore = score;
            bestMove = { index: i, score };
          }
        }
      }
  
      return bestMove;
    } else {
      let bestScore = Infinity;
      let bestMove = {};
      const newTiles = [...tiles];
  
      for (let i = 0; i < newTiles.length; i++) {
        if (newTiles[i] === null) {
          newTiles[i] = opponent;
          const { score } = minimax(newTiles, player, depth + 1, true);
          newTiles[i] = null;
  
          if (score < bestScore) {
            bestScore = score;
            bestMove = { index: i, score };
          }
        }
      }
  
      return bestMove;
    }
  };

  const getWinner = (tiles, player, opponent) => {
    for (const { combo } of winingCombo) {
      const [a, b, c] = combo;
      if (tiles[a] === player && tiles[b] === player && tiles[c] === player) {
        return player;
      } else if (tiles[a] === opponent && tiles[b] === opponent && tiles[c] === opponent) {
        return opponent;
      }
    }
    return null;
  };

  const TileClick = (index) => {
    if (gameState !== GameState.inProgress) return;
    if (playerX === playerTurn) {
      if (tiles[index] !== null) return;

      const newTile = [...tiles];
      newTile[index] = playerTurn;
      setTeils(newTile);
      setPlayerTurn(playerO);
    }
  }

  const onClick = () => {
    setTeils(Array(9).fill(null))
    setGameState(GameState.inProgress)
    setPlayerTurn(playerX)
    setStrike(null)
  }

  return (
    <div className='' style={{}}>
      <h2>TIC TAC TOE</h2>
      <Borad strike={strike} playerTurn={playerTurn} tiles={tiles} onTileClick={TileClick} />
      <GameOver gameState={gameState} />
      <Reset onClick={onClick} />
    </div>
  )
}

export default Breackt;