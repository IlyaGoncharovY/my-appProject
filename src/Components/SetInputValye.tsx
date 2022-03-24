import React, {ChangeEvent} from 'react';

type SetInputValuePropsType = {
    name: string
    value:number
    onChange: (event: ChangeEvent<HTMLInputElement>)=> void

}

export const SetInputValue = (props: SetInputValuePropsType) => {


    return (
        <div>
            <h3>{props.name}</h3>
            <input type={"number"}
                   value={props.value}
                   onChange={props.onChange}

            />
        </div>
    );
};