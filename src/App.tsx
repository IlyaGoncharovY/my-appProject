import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./App.module.css";
import {Header} from "./Components/Header";
import {MultiButton} from "./Components/MultiButton";
import {NavLink, Routes, Route} from "react-router-dom";
import {SetInputValue} from "./Components/SetInputValye";


function App() {

    //const maxValue = 5
    const startValue = 0


    let [num, setNum] = useState<number>(startValue)
    let [valueMax, setValueMax] = useState<number>(startValue)
    let [valueStart, setValueStart] = useState<number>(startValue)


    useEffect(() => {

        let numCounter = localStorage.getItem("counterNum")
        let valueStartCounter = localStorage.getItem("counterValue")
        let valueMaxCounter = localStorage.getItem("counterMaxValue")

        if (numCounter && valueStartCounter && valueMaxCounter) {
            let newNumCounter = JSON.parse(numCounter)
            let newValueStartCounter = JSON.parse(valueStartCounter)
            let newValueMaxCounter = JSON.parse(valueMaxCounter)

            setNum(newNumCounter)
            setValueMax(newValueStartCounter)
            setValueStart(newValueMaxCounter)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("counterNum", JSON.stringify(num))
        localStorage.setItem("counterValue", JSON.stringify(valueStart))
        localStorage.setItem("counterMaxValue", JSON.stringify(valueMax))
    }, [num, valueStart, valueMax])

    const addClickHandler = () => {
        if (valueStart < valueMax) {
            setNum(num + 1)
        }
    }

    const resetClickHandler = () => {
        setNum(startValue)
        setValueMax(startValue)
        setValueStart(startValue)
    }

    const callBackDisableAdd = num === valueMax
    const callBackDisableReset = num !== valueMax

    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        setValueMax(Number(event.currentTarget.value))
    }

    const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        setValueStart(Number(event.currentTarget.value))
    }

    const onClickSetButtonHandler = () => {
        valueMax > valueStart ? setNum(valueStart) : setNum(valueMax)
    }
    return (

        <div className={s.App}>
            <div className={s.headerBody}>

                <div className={num === valueMax ? s.buttonError : s.button}>

                    <Header num={num}/>

                </div>
                <div className={s.counterFunction}>
                    <MultiButton name={"Add"} callBack={addClickHandler} callBackDisable={callBackDisableAdd}/>
                    <MultiButton name={"reset"} callBack={resetClickHandler}
                                 callBackDisable={callBackDisableReset}/>
                </div>
            </div>

            <div className={s.headerBody}>
                <div>
                    <SetInputValue name={"max value"} value={valueMax} onChange={onChangeHandlerMax}/>
                </div>
                <div>
                    <SetInputValue name={"start value"} value={valueStart} onChange={onChangeHandlerStart}/>
                </div>
                <MultiButton name={"set"} callBack={onClickSetButtonHandler}/>
            </div>
        </div>

    )
        ;
}

export default App;
