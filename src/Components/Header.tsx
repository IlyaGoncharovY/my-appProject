import React from 'react';

type HeaderPropsType = {
    num: number
}

export const Header = (props: HeaderPropsType) => {

    return (
        <div>
            {props.num}
        </div>
    );
};

