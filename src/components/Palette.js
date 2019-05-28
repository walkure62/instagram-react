import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';
import LoadingMessage from './LoadingMessage';

export default class Palette extends Component {
    InstaService = new InstaService();

    state = {
        photos: [],
        error: false,
        loading: true
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError)
    }

    onPhotosLoaded = (photos) => {
        setTimeout(function () {
            this.setState({
            photos,
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
            const {src, alt, id} = item;
            return (
                <img key={id} src={src} alt={alt}></img>
            )
        })
    }

    render() {
        const {error, photos, loading} = this.state;

        if (loading) {
            return (
                <div className="palette loading">
                    <LoadingMessage/>
                </div>
            )
        }

        if (error) {
            document.querySelector('.user').style.display = 'none';
            return <ErrorMessage/>
        }

        const items =  this.renderItems(photos);
        return  (
            <div className="palette">
                {items}
            </div>
        )
    }

}