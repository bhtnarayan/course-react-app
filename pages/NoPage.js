import React, {useState, useEffect} from 'react';

const NoPage1 = () => {
    const [car, setCar] = useState({
        brand: "ford",
        model: "mustang", 
        color: "red"
    })

    const updateColor = () => {
        setCar(prevState => {
            return {...prevState, color: "blue", brand: "delta", model: "gamma"}
        });
    }

    return (
        <>
            <h1>My {car.brand}</h1>
            <h2>I love {car.model} {car.color} color.</h2>
            <button onClick={updateColor}>Blue</button>
        </>
    )
}
// hook dependent on variable 
function NoPage2() {
    const [count, setCount] = useState(0); 
    const [calculation, setCalculation] = useState(0); 

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    return (
        <>
            <button onClick = {() => setCount((c) => c + 1)}>+</button>
            <p>Count: {count} * 2</p>
            <p>Calculation: {calculation}</p>
        </>
    )

}

// effect cleanup 
function NoPage() {
    const [count, setCount] = useState(0); 

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

    return <h1>I've rendered {count} times!</h1>
}


export default NoPage;

