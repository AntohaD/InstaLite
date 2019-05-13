import React from 'react';
import { Link } from 'react-router-dom';

export default class InfoPost extends React.Component {
    render() {
        return(
            <div>
                <div className="card-body">
                    <div className="card-title">{this.props.name}</div>
                </div>

                <img className="card-img" src={this.props.postImage}></img>

                <div className="card-body">
                    <div className="card-text likes">Likes - {this.props.likes}</div>
                    <Link type="button" className="btn btn-outline-dark btnBack" to="/">Back to Feed</Link>
                </div>
            </div>
        )
    }
}