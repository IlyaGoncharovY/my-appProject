import React from 'react';
import {AppStateType} from "../../BLL/store/store";
import {useSelector} from "react-redux";

type HeaderPropsType = {
    num: number
}

export const Header = (props: HeaderPropsType) => {
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)
    return (
        <div>
            {error ? '=P' : props.num}
        </div>
    );
};


