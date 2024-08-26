import { Container, Row, Col } from "react-bootstrap";

function MyFooter () {
    return (
        <footer className="bg-dark fixed-bottom" data-bs-theme='dark'>
            <Container fluid>
                <Row className="justify-content-center my-4">
                    <Col xs={12} md={6} className="text-center">
                        <p className="text-light m-0">BookforEveryone &copy; 2024. All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    ) 

}

export default MyFooter