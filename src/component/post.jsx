import React from 'react';

export default class Post extends React.Component {

    render() {
        return (
            <div className="post">
                <div className="userName">
                    <div className="name">{this.props.name}</div>
                </div>
                <div className="postImage">
                    <img className="img img-fluid" src={this.props.postImage}></img>
                </div>
                <div className="like">
                    <div className="sumLike">{this.props.likes}</div>
                </div>
                <div className="Comment">
                    <div className="postText">{this.props.postText}</div>
                </div>

            </div>)
    }
}