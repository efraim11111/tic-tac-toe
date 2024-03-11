import React from 'react'

const Imageschange = () => {
    const images = [
        "https://www.inss.org.il/wp-content/uploads/2022/12/%D7%A4%D7%A0%D7%99%D7%A0%D7%94-%D7%A9%D7%A8%D7%91%D7%99%D7%98.jpg",
        "https://img.haarets.co.il/bs/00000186-97fb-db75-abaf-f7ff4e690001/0b/12/f5b6dc4246378931cef175ed2fde/idf.jpg",
        "https://nocamels.com/wp-content/uploads/2023/10/idf-onepeople.jpeg",
        "https://static.timesofisrael.com/www/uploads/2021/11/F210515MG09.jpg",
        "https://www.inss.org.il/wp-content/uploads/2017/10/36685850235_f612d66696_z.jpg"
      ];
      const [c,setC] = useState(0);
     
     
      return (
    
      
      <>
      <img src={images[Math.abs(c%images.length)]} style={{width:500,height:300}}/>
      <button onClick={()=>{setC(c+1);console.log(c)}}>skip</button>
      <button onClick={()=>{setC(c-1);console.log(c)}}>back</button>
      
        </>
       
      )
}

export default Imageschange