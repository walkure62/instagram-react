import React, {Component} from 'react';
import InstaService from '../services/instaservice';
import User from './User';

export default class Users extends Component {
    InstaService = new InstaService();

    state = {
        users: [],
        error: false
    }

    componentDidMount() {
        this.updateUsers();

    }

    updateUsers() {
        this.InstaService.getAllPosts()
        .then(this.onUsersLoaded)
        .catch(this.onError);
    }

    onUsersLoaded = (users) => {
        this.setState({
            users: users,
            error: false
        })

    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }


    renderUsers(arr) {
        return arr.map((user) => {
            const {photo, name, altName, id} = user;

            return (
                <a href="#" key={id} className="user min">
                <img src={photo} alt={altName}></img>
                <div>{name}</div>
            </a>
            )
        })
    }
    render() {
        const {users} = this.state;
       

        const items = this.renderUsers(users);
        return  (
            <div className="right">
                <User 
                src="https://pp.userapi.com/c854328/v854328696/225a2/X2tkGXjGy3c.jpg" 
                alt="Anastasia" 
                name="walkure62"/>

            <div className="users__block">
            {items}
            </div>
            </div>
        )
    }
}