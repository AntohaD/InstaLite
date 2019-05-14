import React from 'react';
import { Button, Container, Row, Col, Jumbotron } from 'reactstrap';

export default class Login extends React.Component {

    handleClick() {
        // localStorage.setItem('instaToken', 'true');
        const instaClientId = 'a48cf57db3fe4120a34464df9299b09b';
        const instaAuthUrl = `https://api.instagram.com/oauth/authorize/?client_id=${instaClientId}&redirect_uri=${window.location.origin.toString()}/&response_type=token`;
        console.log('instaAuthUrl', instaAuthUrl);
        window.location.href = instaAuthUrl;
    }

    render() {
        return (

            <Container className="h-100">
                <Row className="align-items-center h-100">
                    <Col xs="6" className="mx-auto">
                        <Jumbotron className="text-center">
                            <Button className="align-middle" color="info" onClick={() => this.handleClick()} >Login with Insta</Button>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>

        );
    }
}