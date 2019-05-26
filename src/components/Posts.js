import React, {Component} from 'react';
import Post from './Post'

export default class Posts extends Component {
    render() {
        return  (
            <div className="left">
                <Post alt="nature" src="https://womanadvice.ru/sites/default/files/49/2018-04-07_1543/skalistye_gory_kanada.jpg" />
                <Post alt="nature" src="https://regnum.ru/uploads/pictures/news/2016/01/22/regnum_picture_1453489967687584_big.jpg" />
            </div>
        )
    }
}