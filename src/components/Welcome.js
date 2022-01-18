import React from 'react';

const Welcome = (props) => {
    console.log(props)
    return (
        <div>
            {props.name}
        </div>
    );
};

export default Welcome;