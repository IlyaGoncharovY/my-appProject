import React, {ChangeEvent} from 'react';
import s from "./App.module.css";
import {Header} from "./Components/CounterComponent/Header/Header";
import {MultiButton} from "./Components/CounterComponent/MultiButton/MultiButton";
import {SetInputValue} from "./Components/CounterComponent/SetInputValue/SetInputValye";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Components/BLL/store/store";
import {
    addCounterNumAC, errorInputAC, maxValueAC,
    resetCounterNumAC,
    setNumFromLSAC,
    startValueAC
} from "./Components/BLL/Reducer/counterReducer";


export function App() {

    const num = useSelector<AppStateType, number>(state => state.counter.num)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)

    const dispatch = useDispatch()


    const addClickHandler = () => {
        dispatch(addCounterNumAC())
    }

    const resetClickHandler = () => {
        dispatch(resetCounterNumAC())
    }

    const onClickSetButtonHandler = () => {
        dispatch(setNumFromLSAC())
    }

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let numMaxValue = Number(e.currentTarget.value)
        dispatch(maxValueAC (numMaxValue))
        if (numMaxValue <= startValue || numMaxValue < 0) {
            dispatch(errorInputAC(true))
        } else dispatch(errorInputAC(false))
    }

    const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let numStartValue = Number(e.currentTarget.value)
        dispatch(startValueAC (numStartValue))
        if (numStartValue >= maxValue || numStartValue < 0) {
            dispatch(errorInputAC(true))
        } else dispatch(errorInputAC(false))
    }

    const callBackDisableAdd = num >= maxValue || maxValue  <= startValue
    const callBackDisableReset = num !== maxValue

    return (
        <div className={s.App}>
            <div className={s.headerBody}>
                <div className={s.counterNumber}>
                    <div className={num >= maxValue ? s.buttonError : s.button}>
                        <Header num={num}/>
                    </div>
                </div>
                <div className={s.counterFunction}>
                    <MultiButton name={"Add"}
                                 callBack={addClickHandler}
                                 callBackDisable={callBackDisableAdd}
                    />
                    <MultiButton name={"Reset"}
                                 callBack={resetClickHandler}
                                 callBackDisable={callBackDisableReset}
                    />
                </div>
            </div>
            <div className={s.settingsBody}>
                <div>
                    <SetInputValue name={"max value"}
                                   value={maxValue}
                                   onChange={setMaxValue}
                    />
                </div>
                <div>
                    <SetInputValue name={"start value"}
                                   value={startValue}
                                   onChange={setStartValue}
                    />
                </div>
                <MultiButton name={"Set"} callBack={onClickSetButtonHandler}/>
            </div>
        </div>
    );
}

