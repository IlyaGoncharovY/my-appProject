import React from 'react';
import {AppStateType} from "../../BLL/store/store";
import {useSelector} from "react-redux";
import s from "./Header.module.css"

type HeaderPropsType = {
    num: number
    text:string
}

export const Header = (props: HeaderPropsType) => {
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    return (
        <div className={error ? s.errorText : s.headerText}>
            {error ? props.text : props.num}
        </div>
    );
};


