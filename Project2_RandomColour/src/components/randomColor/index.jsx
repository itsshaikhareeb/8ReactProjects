import React, { useState } from 'react'

function RandomColor() {
    const [typeOfColor, settypeOfColor] = useState('hex');
    const [color, setColor] = useState('black');

        console.log("render");

    function handleCreateRandomColor(){
        
    }

  return (
    <div style={{
        width:'100vw',
        height:'100vh',
        backgroundColor: color,
        display: "flex",
        justifyContent:'center',
        alignItems:'center',
        gap:'20px'
    }} >
        <button onClick={()=>{settypeOfColor('hex')}} >Generate HEX color</button>
        <button onClick={()=>{settypeOfColor('rgb')}} >Generate RGB color</button>
        <button onClick={()=>{handleCreateRandomColor}} >Generate random Color</button>
    </div>
  )
}

export default RandomColor