import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

type SetInputValuePropsType = {
    name: string
    value:number
    onChange: (event: ChangeEvent<HTMLInputElement>)=> void

}

export const SetInputValue = (props: SetInputValuePropsType) => {


    return (
        <div>
           {/* <h3>{props.name}</h3>*/}
            <TextField id="outlined-basic"
                       label={props.name}
                       variant="outlined"
                       type={"number"}
                       sx={{p:2}}
                       value={props.value}
                       onChange={props.onChange}/>
          {/*  <input type={"number"}
                   value={props.value}
                   onChange={props.onChange}
            />*/}
        </div>
    );
};