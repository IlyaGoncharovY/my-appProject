import {combineReducers, createStore} from "redux";
import {counterReducer} from "../Reducer/counterReducer";
import {loadState, saveState} from "../../LocalStorageCounter/localStorage";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>