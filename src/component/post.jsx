import React from 'react';
import ClickPost from './clickPost.jsx';
import DetailPost from './detailPost.jsx';

export default class Post extends React.Component {

    render() {
        return (
            <div className="card d-flex border-top-0 border-right-0 border-left-0 mx-auto shadow-sm p-4 mb-4 bg-white">
                <div className="card-body">
                    <div className="card-title">{this.props.name}</div>
                </div>
                
                <img className="card-img" src={this.props.postImage} 
                    onClick={() => {
                    ClickPost(this);
                    }}
                    >
                </img>
                
                <div className="card-body">
                    <div className="card-text likes">Likes - {this.props.likes}</div>
                    <div className="card-text">{this.props.name}: {this.props.postText}</div>
                </div>

            </div>)
    }
}