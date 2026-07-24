import React, { useState } from 'react'

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

    function handleCreateRandomRgbColor() {
        
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: color, //changes the color.
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px'
        }} >
            <button onClick={() => { settypeOfColor('hex') }} >Generate HEX color</button>
            <button onClick={() => { settypeOfColor('rgb') }} >Generate RGB color</button>
            <button onClick={  typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor }>Generate random Color</button>
        </div>
    )
}

 
export default RandomColor