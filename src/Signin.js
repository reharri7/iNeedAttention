import React, { Component } from 'react';
import './Signin.css';
import { onRouteChange } from './App';


const Signin = ({onRouteChange }) => {
    return(
        <div>
            <p>"What's the magic password?"</p>
            <input/>
            <button 
            onClick={() => onRouteChange('home')}
            className="smButton">Submit</button>
        </div>
    );
}
export default Signin;