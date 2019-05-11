import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return <div className="navbar navbar-expand-sm bg-light navbar-light fixed-top">
            <Link className="navbar-brand" to="/">InstaLite</Link>
            <ul className="navbar-nav ml-auto flex-nowrap">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">My profile</Link>
                </li>
            </ul>
        </div>
    }
}