import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import "./App.css";

class App extends React.Component{
    render(){
        return(
            <div id="app">
                <section id="first" style={{backgroundColor: "green", width: "100vw", height: "100vh"}}></section>
                <section id="first" style={{backgroundColor: "brown", width: "100vw", height: "100vh"}}></section>
                {/* <NavBar /> */}
            </div>
        );
    }
}

export {App}