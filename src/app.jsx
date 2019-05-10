import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/header.jsx';
import PostsLists from './component/postsList.jsx';

ReactDOM.render(
    <Router>
        <div>
            <Header />
                <Switch>
                    <Route exact path="/" component={PostsLists} />
                </Switch>
        </div>
    </Router>,
    document.getElementById("app")
)