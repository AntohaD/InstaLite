import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './component/logout-login/login.jsx';
import Logout from './component/logout-login/logout.jsx';
import Main from './component/mainPage.jsx';
import PrivateRoute from './component/logout-login/privateRoute.jsx';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <PrivateRoute component={Main} />
        </Switch>
    </Router>,
    document.getElementById("app")
)