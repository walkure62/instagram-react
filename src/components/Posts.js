import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';

export default class Posts extends Component {
    InstaService = new InstaService();

    state = {
        posts: [],
        error: false,
        loading: true
    }

    componentDidMount() {
        this.updatePosts();

    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        setTimeout(function () {
            this.setState({
            posts,
            error: false,
            loading: false
            });
          }.bind(this), 4000)
        }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {name, altName, photo, src, alt, descr, id} = item;

            return (
                <div key={id} className="post">
                <User
                src= {photo}
                alt= {altName}
                name= {name}
                min />
                <img src={src} alt={alt}></img>
                <div className="post__name">
                    {name}
                </div>
                <div className="post__descr">
                    {descr}
                </div>
            </div>
            )
        })
    }

    render() {
        const {error, posts, loading} = this.state;

        if (loading) {
                   return (
                <div className="left loading">
                    <LoadingMessage/>
                </div>
            )
        }

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);
        return  (
            <div className="left">
                {items}
            </div>
        )
    }
}