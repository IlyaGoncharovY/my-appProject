import React, {useState} from 'react';
import s from "./App.module.css";
import {Header} from "./Components/Header";
import {MultiButton} from "./Components/MultiButton";


function App() {

    const maxValue = 5
    const startValue = 0

    let [num, setNum] = useState<number>(startValue)

    const addClickHandler = () => {
        if (num < maxValue) {
            setNum(num + 1)
        }
    }

    const resetClickHandler = () => {
        setNum(startValue)
    }



    return (

        <div className={s.App}>
            <div className={s.headerBody}>
                <div className={num == 5 ? s.buttonError : s.button}>
                    <Header num={num}/>
                </div>
                <div className={s.counterFunction}>
                    <MultiButton name={"Add"} callBack={addClickHandler} callBackDisable = {num === 5 }/>
                    <MultiButton name={"reset"} callBack={resetClickHandler} callBackDisable={num === 5 ? false : true}/>
                </div>
            </div>
        </div>
    );
}

export default App;
