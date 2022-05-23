import React from 'react';
import {Button} from "@mui/material";


type MultiButtonPropsType = {
    name: string
    callBack: () => void
    callBackDisable?: boolean
}

export const MultiButton = (props: MultiButtonPropsType) => {

    const addClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <Button
                variant={"contained"}
                color={"success"}
                onClick={addClickHandler}
                disabled={props.callBackDisable}>
                {props.name}
            </Button>
        </div>
    );
};