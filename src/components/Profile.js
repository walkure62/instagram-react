import React from 'react';
import User from './User';
import Palette from './Palette';

export default function Profile () {
    return (
        <div className="container profile">
            <User 
            src="https://pp.userapi.com/c854328/v854328696/225a2/X2tkGXjGy3c.jpg" 
            alt="Anastasia" 
            name="walkure62"/>
            <Palette/>
        </div>
    )
}