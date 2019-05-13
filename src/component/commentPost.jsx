import React from 'react';

export default class CommentPost extends React.Component {
    render() {
        return (
            
                <div className="card-body">
                    <div className="media border p-3">
                        <div className="media-body">{this.props.comments.Comment}</div>
                    </div>
                </div>
            
        )
    }
}