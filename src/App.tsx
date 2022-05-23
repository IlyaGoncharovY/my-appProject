import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./App.module.css";
import {Header} from "./Components/CounterComponent/Header/Header";
import {MultiButton} from "./Components/CounterComponent/MultiButton/MultiButton";
import {SetInputValue} from "./Components/CounterComponent/SetInputValue/SetInputValye";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Components/BLL/store/store";
import {
    addCounterNumAC, maxValueAC,
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
        dispatch(maxValueAC (Number(e.currentTarget.value)))
    }

    const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(startValueAC (Number(e.currentTarget.value)))
    }





    const callBackDisableAdd = num >= maxValue || maxValue  <= startValue
    const callBackDisableReset = num !== maxValue
    /*  //const maxValue = 5
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
          dispatch(addCounterNumAC())
      /!*    if (valueStart < valueMax) {
              setNum(num + 1)
          }*!/
      }
      const resetClickHandler = () => {
          setNum(startValue)
          setValueMax(startValue)
          setValueStart(startValue)
      }

      const callBackDisableAdd = num === valueMax || valueMax <= valueStart
      const callBackDisableReset = num !== valueMax

      const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
          setValueMax(Number(event.currentTarget.value))
      }

      const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
          setValueStart(Number(event.currentTarget.value))
      }

      const onClickSetButtonHandler = () => {
          valueMax > valueStart ? setNum(valueStart) : setNum(valueMax)
      }*/

    return (

        <div className={s.App}>
            {/*
            <div className={s.headerBody}>
                <div className={s.counterNumber}>
                    <div className={num === valueMax ? s.buttonError : s.button}>

                        <Header num={num}/>

                    </div>
                </div>
                <div className={s.counterFunction}>
                    <MultiButton name={"Add"} callBack={addClickHandler} callBackDisable={callBackDisableAdd}/>
                    <MultiButton name={"reset"} callBack={resetClickHandler}
                                 callBackDisable={callBackDisableReset}/>
                </div>
            </div>


            <div className={s.settingsBody}>
                <div>
                    <SetInputValue name={"max value"} value={valueMax} onChange={onChangeHandlerMax}/>
                </div>
                <div>
                    <SetInputValue name={"start value"} value={valueStart} onChange={onChangeHandlerStart}/>
                </div>
                <MultiButton name={"set"} callBack={onClickSetButtonHandler}/>
            </div>*/}
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
                    {/* input max*/}
                    <SetInputValue name={"max value"}
                                   value={maxValue}
                                   onChange={setMaxValue}
                    />
                </div>
                <div>
                    {/*input start*/}
                    <SetInputValue name={"start value"}
                                   value={startValue}
                                   onChange={setStartValue}
                    />
                </div>
                {/* button set*/}
                <MultiButton name={"Set"} callBack={onClickSetButtonHandler}/>
            </div>
        </div>
    );
}

