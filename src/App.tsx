import React, {useState} from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {AddNumber} from "./Components/AddNumber";
import {Reset} from "./Components/Reset";


function App() {

    const maxValue = 5
    const startValue = 0

    let [num, setNum] = useState<number>(startValue)

    const addClickHandler = () => {
        if(num < maxValue) {
            setNum(num+1)
        }
    }

    const resetClickHandler = () => {
      setNum(startValue)
    }
    
    
    return (
        <div className="App">
            <Header num={num}/>
            <AddNumber name={"Add"} callBack={addClickHandler}/>
            <Reset name={"reset"} callBack={resetClickHandler}/>
        </div>
    );
}

export default App;
