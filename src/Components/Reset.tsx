import React from 'react';

type ResetPropsType = {
    name: string
    callBack: () => void
}

export const Reset = (props: ResetPropsType) => {

    const resetClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={resetClickHandler}>{props.name}</button>
        </div>
    );
};

