import React from 'react'

const Tile = ({className ,value,onClick,playerTurn,strike}) => {
    let hoverTurn = null;
    if (value ==null){
        hoverTurn = `${playerTurn}-hover`
    }
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverTurn} ${strike}`} style={{}}>{value}</div>
  )
}

export default Tile