import React from 'react';

// var Logout = ()=>(<h1>You have logged out</h1>)

export default class Logout extends React.Component {

    componentDidMount() {
        localStorage.removeItem('instaToken');
    }

    render() {
        return (<h1>You have logged out</h1>);
    }
}