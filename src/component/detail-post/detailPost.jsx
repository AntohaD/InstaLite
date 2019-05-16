import React from 'react';
import InfoPost from './infoPost.jsx'
import CommentPost from './commentPost.jsx';

export default class DetailPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            post: []
        };
    }

    componentDidMount() {

        const id = this.props.match.params.id;
        const getDataUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';
        let instaToken = localStorage.getItem('instaToken');

        if (instaToken) {
            fetch(`${getDataUrl}${instaToken}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        const post = result.data.find((item) => { return item.caption.id === id});
                        
                        this.setState({
                            isLoaded: true,
                            post: post
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

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="text-center">Loading...</div>;
        } else {
            return(
                <div>
                    <div className="row detailPost" key={post.caption.from.id} >
                        <div className="col-md-6 col-sm-12 card d-flex border-top-0 border-right-0 border-bottom-0 border-left-0 mx-auto">
                            <InfoPost 
                                name={post.caption.from.username} 
                                postImage={post.images.standard_resolution.url} 
                                likes={post.likes.count} />
                        </div>
                        <div className="col-md-6 col-sm-12 card d-flex border-top-0 border-right-0 border-bottom-0 border-left-0 mx-auto">
                            <CommentPost comment={post.id}/>
                        </div>
                    </div> 
                </div>
            )
        }
    }
}