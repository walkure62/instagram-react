import React from 'react';
import img from '../error.png';

const ErrorMessage = () => {
    return (
        <> 
            <img src={img} alt='error' height="275px" weight="410px"></img>
        </> // функциональная обертка, которая не отображается в основной верстке (реакт фрагмент)
    )
}

export default ErrorMessage;