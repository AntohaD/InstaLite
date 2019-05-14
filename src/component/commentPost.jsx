import React from 'react';

export default class CommentPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            post: []
        };
    }

    componentDidMount() {
        const id = this.props.comment;
        const getDataUrl = `https://api.instagram.com/v1/media/${id}/comments?access_token=`;
        let instaToken = localStorage.getItem('instaToken');

        if (instaToken) {
            fetch(`${getDataUrl}${instaToken}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
                        this.setState({
                            isLoaded: true,
                            post: result
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
    }

    render() {
        const {
            error,
            isLoaded,
            post
        } = this.state;

        console.log(post)

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="text-center">Loading...</div>;
        } else {
            return (
                    <div className="card-body">
                        <div className="media border p-3">
                            <div className="media-body">{
                                post.data[0].text
                                }</div>
                        </div>
                    </div>
                
            )
        }
    }
}