import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {

        const token = props.location.hash.replace('#access_token=', '');

        if (token)
            localStorage.setItem('instaToken', token);

        const instaToken = localStorage.getItem('instaToken');

        return instaToken ? <Component {...props} /> : <Redirect to='/login' />
    }
    } />
)

export default PrivateRoute;