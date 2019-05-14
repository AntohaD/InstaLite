import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

export default class Logout extends React.Component {

    componentDidMount() {
        localStorage.removeItem('instaToken');
    }

    render() {
        return (
            <div>
                <h1>You have logged out</h1>
                <Link type="button" class="btn btn-dark" to="/login">Return to login</Link>
            </div>
        );
    }
}