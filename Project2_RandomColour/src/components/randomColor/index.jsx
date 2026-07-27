import React, { useEffect, useState } from 'react'

function RandomColor() {
    const [typeOfColor, settypeOfColor] = useState('hex');
    const [color, setColor] = useState('crimson');

    function randomColotUtility(lengthOfHex) {
        return Math.floor(Math.random() * lengthOfHex);
    }
    function handleCreateRandomHexColor() {
        let hexColor = "#";
        
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f'];
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColotUtility(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor)
    }

    useEffect(()=>{
        if(typeOfColor === 'rgb') handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    },[typeOfColor])

    function handleCreateRandomRgbColor() {
        let  r= randomColotUtility(256)
        let  g= randomColotUtility(256)
        let  b= randomColotUtility(256)
        setColor(`rgb(${r},${g},${b})`)
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: color, //changes the color.
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:'column',
            gap: '20px'
        }} >
            <button onClick={() => { settypeOfColor('hex') }} >Generate HEX color</button>
            <button onClick={() => { settypeOfColor('rgb') }} >Generate RGB color</button>
            <button onClick={  typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor }>Generate random Color</button>
            <div
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                color:'white',
                fontSize:'50px',
                flexDirection:'column',
                gap:'20px',
                marginTop:'10px'
            }}
            >
                <h3>{typeOfColor === 'rgb' ? "RGB color" : " Hex color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
        
    )
}

 
export default RandomColor