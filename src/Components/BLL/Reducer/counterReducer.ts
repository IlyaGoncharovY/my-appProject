const initialState = {
    num: 0,
    startValue: 0,
    maxValue: 5,
    error: false,
}

type initialStateType = typeof initialState
type ActionType = addCounterNumACType
    | setNumFromLSACType
    | resetCounterNumACType
    | startValueACType
    | maxValueACType
    | errorInputACType


export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "ADD-NUM":
            return {
                ...state,
                num: state.num + 1
            }
        case "RESET-NUM":
            return {
                ...state,
                num: state.num = 0
            }
        case "SET-NUM":
            return {
                ...state,
                num: state.startValue
            }
        case "VALUE-START":
            return {
                ...state,
                startValue: action.startValue
            }
        case "MAX-VALUE":
            return {
                ...state,
                maxValue: action.maxValue
            }
        case "ERROR-INPUT":
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export type addCounterNumACType = ReturnType<typeof addCounterNumAC>
export type resetCounterNumACType = ReturnType<typeof resetCounterNumAC>
export type setNumFromLSACType = ReturnType<typeof setNumFromLSAC>
export type startValueACType = ReturnType<typeof startValueAC>
export type maxValueACType = ReturnType<typeof maxValueAC>
export type errorInputACType = ReturnType<typeof errorInputAC>

export const addCounterNumAC = () => (
    {
        type: "ADD-NUM"
    } as const
)


export const resetCounterNumAC = () => (
    {
        type: "RESET-NUM"
    } as const
)

export const setNumFromLSAC = () => (
    {
        type: "SET-NUM"
    } as const
)

export const startValueAC = (startValue: number) => (
    {
        type: "VALUE-START",
        startValue
    } as const
)

export const maxValueAC = (maxValue: number) => (
    {
        type: "MAX-VALUE",
        maxValue
    } as const
)

export const errorInputAC = (error: boolean) => (
    {
        type: "ERROR-INPUT",
        error
    } as const
)






