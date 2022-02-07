import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "mustang",
            color: "red",
            model : "ford",
            year: 1999
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({color: "yellow"})
        }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = 
        "Before the update, the color was " + prevState.color;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = 
        "The update favorite color is " + this.state.color;
    }

    shouldComponentUpdate() {
        return false;
    }

    changeColor = () => {
        this.setState({color: "blue"});
    }
    render() {
        return (
            <>
            <h2>Hi i am a {this.state.model} car It is {this.state.color} in color.</h2>
            <div id = "div1"></div>
            <div id = "div2"></div>
            <button type = "button" onClick={this.changeColor}>changeColor</button>
            </>
            ) 
    }
}

export default Car;
