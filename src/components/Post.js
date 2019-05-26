import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                src="https://i.ytimg.com/vi/d4oG8_3j58U/maxresdefault.jpg"
                alt="girl"
                name="Walkure"
                min />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    Some account
                </div>
                <div className="post__descr">
                    Lorem ipsum Memento mori Lorem ipsum Memento mori Lorem ipsum Memento mori Lorem ipsum Memento mori Lorem ipsum Memento mori
                </div>
            </div>
        )
    }
}