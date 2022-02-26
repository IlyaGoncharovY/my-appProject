import React from 'react';

type ResetPropsType = {
    name: string
    callBack: () => void
    callBackDisable:boolean
}

export const Reset = (props: ResetPropsType) => {

    const resetClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={resetClickHandler} disabled={props.callBackDisable}>{props.name}</button>
        </div>
    );
};

