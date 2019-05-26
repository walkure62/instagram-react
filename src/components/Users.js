import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User
                src="https://i.ytimg.com/vi/d4oG8_3j58U/maxresdefault.jpg"
                alt="girl"
                name="Walkure"
                />
            <div className="users__block">
              <User
                src="https://i.ytimg.com/vi/d4oG8_3j58U/maxresdefault.jpg"
                alt="girl"
                name="Walkure"
                min />
                <User
                src="https://i.ytimg.com/vi/d4oG8_3j58U/maxresdefault.jpg"
                alt="girl"
                name="Walkure"
                min />
                <User
                src="https://i.ytimg.com/vi/d4oG8_3j58U/maxresdefault.jpg"
                alt="girl"
                name="Walkure"
                min />
                <User
                src="https://i.ytimg.com/vi/d4oG8_3j58U/maxresdefault.jpg"
                alt="girl"
                name="Walkure"
                min />
            </div>
        </div>
    )
}