import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header.jsx';
import PostsLists from './postsList.jsx';
import MyProfile from './myProfile.jsx';
import DetailPost from './detail-post/detailPost.jsx';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={PostsLists} />
                    <Route path="/profile" component={MyProfile} />
                    <Route path="/detailPost/:id" component={DetailPost} />
                </Switch>
            </div>
        )
    }   
}