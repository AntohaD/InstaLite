import React from 'react';

export default class Comment extends React.Component {

    render() {
        return (
            <div className="card-body">
                <div className="media border p-3">
                    <div className="media-body">
                        {this.props.post.from.username}: {this.props.post.text}
                    </div>
                </div>
            </div>
        )
    }
}