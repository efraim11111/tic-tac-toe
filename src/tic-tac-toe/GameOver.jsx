import GameState from "./GameState";
function GameOver({gameState}) {
    if(gameState==0){
       return (
      <div>X Win</div>
  
    ) 
    }
    if(gameState==1){
       return (
      <div >O Win</div>
  
    ) 
    }
    if(gameState==2){
       return (
      <div>Draw</div>
  
    ) 
    }
    if(gameState==3){
       return (
     <></>
    ) 
    }
    
  }
  
  export default GameOver;
  