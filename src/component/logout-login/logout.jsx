import React from 'react';
import { Link } from 'react-router-dom';

export default class Logout extends React.Component {

    componentDidMount() {
        localStorage.removeItem('instaToken');
    }

    render() {
        return (
            <div className="text-center">
                <h2 className="logoutText">You have logged out</h2>
                <Link type="button" className="btn btn-dark" to="/login">Return to login</Link>
            </div>
        );
    }
}