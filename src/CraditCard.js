import React from 'react'

const CraditCard = ({logo, Cardnumber,color,children}) => {
  return (
    <>
      <div style={{ width: 300, height: 300 ,background:color}}>
        {Cardnumber}<br/>
        {children}
    </div>
    

    </>
  
   
  )
}

export default CraditCard