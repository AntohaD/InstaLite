import React from 'react';
import Post from './post.jsx';

export default class PostsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        fetch("../src/data/dataPosts.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result
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

    render() {
        const {
            error,
            isLoaded,
            posts
        } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="text-center">Loading...</div>;
        } else {
            return (
                <div className="container-fluid">
                    <h2 className="text-center">My Posts</h2>

                    <div className="gbody ">
                        {
                            posts.map((i) => {
                                return <div>
                                    <Post key={i.id} name={i.name} postImage={i.postImage} likes={i.likes} postText={i.postText}/>
                                </div>
                            })
                        }
                    </div>
                </div>
            );
        }
    }
}