import React from 'react';
import { Button, Container, Row, Col, Jumbotron } from 'reactstrap';

export default class Login extends React.Component {

    handleClick() {
        const instaClientId = 'a48cf57db3fe4120a34464df9299b09b';
        const instaAuthUrl = `https://api.instagram.com/oauth/authorize/?client_id=${instaClientId}&redirect_uri=${window.location.origin.toString()}/&response_type=token`;
        window.location.href = instaAuthUrl;
    }

    render() {
        return (

            <Container className="h-100">
                <Row className="align-items-center h-100">
                    <Col xs="6" className="mx-auto">
                        <Jumbotron className="text-center">
                            <Button className="btn btn-dark" 
                                    onClick={() => this.handleClick()}>
                                        Login with Instagram
                            </Button>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>

        );
    }
}