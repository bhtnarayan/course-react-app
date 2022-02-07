import React from 'react';
import MyImage from "../logo192.png"
import { useState } from 'react';

const Home = () => {
    const myStyle = {
        color:"white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    }
    const [count, setCount] = useState(0);

    function add() {
        setCount((prevCount) => prevCount + 1);
    }

    function subtract() {
        setCount((prevCount) => prevCount - 1);
    }


    return(
        <>
        <img src = {MyImage} width = "100px;" />
        <h2 style={{backgroundColor: "lightblue"}}>Home is here.</h2>
        <h3 style = {myStyle}>This is home page where you land for the first time.</h3>
        <h1>The value is {count}</h1>
        <button onClick={subtract}>-</button>
        <button onClick={add}>+</button>
        </>
        ) 
        
}

export default Home;
