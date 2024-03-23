import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <div className='inputflex'>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
            />
        </div>
    );
};

export default Input;