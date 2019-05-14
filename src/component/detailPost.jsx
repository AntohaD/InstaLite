import React from 'react';
import Id from '../data/idNumber.jsx';
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

        const getDataUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';
        let instaToken = localStorage.getItem('instaToken');

        if (instaToken) {
            fetch(`${getDataUrl}${instaToken}`)
                .then(res => res.json())
                .then(
                    (result) => {
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

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="text-center">Loading...</div>;
        } else {
            return(
                <div>
                    {
                        post.data.map((i) => {
                            
                            if (i.caption.id == Id) {
                                    
                                return <div className="row detailPost">
                                    <div className="col-md-6 col-sm-12 card d-flex border-top-0 border-right-0 border-bottom-0 border-left-0 mx-auto">
                                        <InfoPost 
                                        key={i.caption.from.id} 
                                        name={i.caption.from.username} 
                                        postImage={i.images.standard_resolution.url} 
                                        likes={i.likes.count} />
                                    </div>
                                    <div className="col-md-6 col-sm-12 card d-flex border-top-0 border-right-0 border-bottom-0 border-left-0 mx-auto">
                                        <CommentPost comment={i.id}/>
                                    </div>
                                </div>
                            }       
                        }
                        )
                    }
                </div>
            )
        }
    }
}