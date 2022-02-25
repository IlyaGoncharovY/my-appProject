import React from 'react';

type AddNumberPropsType = {
    name: string
    callBack: () => void
}

export const AddNumber = (props: AddNumberPropsType) => {

    const addClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={addClickHandler}>{props.name}</button>
        </div>
    );
};

