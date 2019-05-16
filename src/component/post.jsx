import React from 'react';
import { Link } from 'react-router-dom';

export default class Post extends React.Component {

    render() {
        return (
            <Link className="card d-flex border-top-0 border-right-0 border-left-0 mx-auto shadow-sm p-4 mb-4 bg-white nav-link"
                to={`/detailPost/${this.props.id}`}>
                
                <div className="card-body">
                    <div className="card-title">{this.props.name}</div>
                </div>
                
                <img className="card-img" src={this.props.postImage}></img>
                
                <div className="card-body">
                    <div className="card-text likes">Likes - {this.props.likes}</div>
                    <div className="card-text">{this.props.name}: {this.props.postText}</div>
                </div>
            </Link>)
    }
}