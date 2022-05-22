import React from 'react';

const initialState = {
    num: 0
}

type initialStateType = typeof initialState
type ActionType = addCounterNumACType | setNumFromLSACType


export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "ADD-NUM":
            return {
                ...state,
                num: state.num + 1
            }
        case "SET-NUM-FROM-LS":
            return {
                ...state, num: action.num
            }


        default:
            return state
    }
}

export type addCounterNumACType = ReturnType<typeof addCounterNumAC>
export type setNumFromLSACType = ReturnType<typeof setNumFromLSAC>

export const addCounterNumAC = () => (
    {
        type: "ADD-NUM"
    }
) as const

export const setNumFromLSAC = (num: number) => (
    {
        type: "SET-NUM-FROM-LS",
        num
    }
) as const




