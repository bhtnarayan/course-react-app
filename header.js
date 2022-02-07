import React from 'react';
import myImage from './logo192.png'

export default function Head() {
    return (
        <div>
            <nav className = "navbar">
            <img src = {myImage} height = "50px" />
            <h3>React</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}