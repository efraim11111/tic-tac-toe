import React from 'react'
import Tile from './Tile';
import Strike from "./Strike"

const Borad = ({tiles ,onTileClick,playerTurn ,strike}) => {
  return (
    <div className={`board`}>
      <h2>heloo there u pourerewrewrewrew</h2>
       <Tile playerTurn={playerTurn} onClick={()=>onTileClick(0)} value={tiles[0]} className='border_bottom border_right'/>
       <Tile playerTurn={playerTurn} onClick={()=>onTileClick(1)} value={tiles[1]} className='border_bottom border_right'/>
       <Tile playerTurn={playerTurn} onClick={()=>onTileClick(2)} value={tiles[2]} className='border_bottom '/>
       <Tile playerTurn={playerTurn} onClick={()=>onTileClick(3)} value={tiles[3]} className='border_bottom border_right'/>
       <Tile playerTurn={playerTurn} onClick={()=>onTileClick(4)} value={tiles[4]} className='border_bottom border_right'/>
       <Tile playerTurn={playerTurn} onClick={()=>onTileClick(5)} value={tiles[5]} className='border_bottom '/>
       <Tile playerTurn={playerTurn} onClick={()=>onTileClick(6)} value={tiles[6]} className='border_right'/>
       <Tile playerTurn={playerTurn} onClick={()=>onTileClick(7)} value={tiles[7]} className='border_right'/>
       <Tile playerTurn={playerTurn} onClick={()=>onTileClick(8)} value={tiles[8]}/>
       <Strike strike={strike}/>

    </div>
  )
}

export default Borad