import React, {useState} from 'react';
import s from "./App.module.css";
import {Header} from "./Components/Header";
import {AddNumber} from "./Components/AddNumber";
import {Reset} from "./Components/Reset";


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
                    <AddNumber name={"Add"} callBack={addClickHandler}/>
                    <Reset name={"reset"} callBack={resetClickHandler} callBackDisable={num == 5 ? false : true}/>
                </div>
            </div>
        </div>
    );
}

export default App;
