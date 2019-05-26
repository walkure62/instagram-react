import React from 'react';
import Posts from '../components/Posts.js';
import Users from './Users';

export default function Feed () {
    return (
    <div className="container feed">
        <Posts/>
        <Users/>
    </div>
    )
}
