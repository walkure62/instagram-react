import React from 'react';
import img from '../loading.gif';

const LoadingMessage = () => {
    return (
        <> 
            <img className="loadImg" src={img} alt='loading'></img>
        </> // функциональная обертка, которая не отображается в основной верстке (реакт фрагмент)
    )
}

export default LoadingMessage;