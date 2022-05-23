import {AppStateType} from "../BLL/store/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('counterNum');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('counterNum', serializedState);
    } catch {
        // ignore write errors
    }
};