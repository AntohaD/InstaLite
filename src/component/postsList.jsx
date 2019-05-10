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

    // При получении данных, вызываем setState, чтобы передать их компоненту
    componentDidMount() {
        fetch("../data/dataPosts.json")
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
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container-fluid">
                    <h1>My Posts</h1>

                    <div className="gbody">
                        <div className="row">
                            {
                                posts.map((i) => {
                                    return <div className="col">
                                        <Post key={i.id} name={i.name} postImage={i.postImage} likes={i.likes} postText={i.postText}/>

                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }
}