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
        
        const getDataUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';
        let instaToken = localStorage.getItem('instaToken');
        
        if (instaToken) {
            fetch(`${getDataUrl}${instaToken}`)
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
                            posts.data.map((i) => {
                                
                                {/* If Error check this */}
                                {/* console.log(i); */}

                                if (i.caption) {
                                    return <div key={i.caption.id}>
                                        <Post
                                            id={i.caption.id}
                                            name={i.caption.from.username}
                                            postImage={i.images.standard_resolution.url}
                                            likes={i.likes.count}
                                            postText={i.caption.text} />
                                    </div>
                                } else {
                                    return <p>Check if the path in postList.jsx is correct.</p>
                                }
                            })
                        }
                    </div>
                </div>
            );
        }
    }
}