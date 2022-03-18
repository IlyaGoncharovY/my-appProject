import React from 'react';

type MultiButtonPropsType = {
    name: string
    callBack: () => void
    callBackDisable: boolean
}

export const MultiButton = (props: MultiButtonPropsType) => {

    const addClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={addClickHandler} disabled={props.callBackDisable}>{props.name}</button>
        </div>
    );
};