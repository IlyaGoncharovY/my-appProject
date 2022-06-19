import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

type SetInputValuePropsType = {
    name: string
    value: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void

}

export const SetInputValue = (props: SetInputValuePropsType) => {


    return (
        <div>
            <TextField id="outlined-basic"
                       label={props.name}
                       variant="outlined"
                       type={"number"}
                       color={"secondary"}
                       sx={{p: 2}}
                       value={props.value}
                       onChange={props.onChange}/>
        </div>
    );
};