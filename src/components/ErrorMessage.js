import React from 'react';
import img from '../error.png';

const ErrorMessage = () => {
    return (
        <> 
            <img src={img} alt='error'></img>
        </> // функциональная обертка, которая не отображается в основной верстке (реакт фрагмент)
    )
}

export default ErrorMessage;