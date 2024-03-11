import _ from 'lodash'
import { useState } from 'react'





const Mapshuf = () => { 
    const [arr,setArr] = useState([1,2,3,4,5,6,7,8,9])
   
    const shuf = ()=>{
    setArr(_.shuffle(arr))
}
    const dele = (num) =>{
        setArr(arr.filter((arr)=> num != arr[num]))
        console.log(arr.filter((arr)=> arr[num] < 3));
        console.log(arr[num]);
    }

  return (
    <>
  
    <div>
        {arr.map((num,i) => 
            <div key={num}>          
                <input type="checkbox" />
                <label>{num}</label>
                <button onClick={()=>dele(num)}>remove</button>
            </div>

        )}
    </div>
    <button onClick={shuf}>click</button>
    <button onClick={dele}>click</button>
  
    </>
    );

}

export default Mapshuf