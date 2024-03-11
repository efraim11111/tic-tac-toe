import Box1 from "./Box1"
import Box2 from "./Box2"
import Box3 from "./Box3"
import Box4 from "./Box4"

const BigBox = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
        <div className=" border d-flex flex-wrap border-3" style={{width:"606px",height:"600px"}}>
        <Box1/>
        <Box2/>
        <Box3/>
        <Box4/>
        </div>
    </div>
  )
}

export default BigBox