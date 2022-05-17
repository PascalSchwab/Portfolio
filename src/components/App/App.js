import React from "react";
import "./App.css";
import Intro from "../Intro/Intro";

class App extends React.Component{
    render(){
        return(
            <div id="app">
                <Intro />
            </div>
        );
    }
}

export default App