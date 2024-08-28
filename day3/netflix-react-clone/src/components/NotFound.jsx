import { Container, Row, Col, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Row className="justify-content-center my-4">
                <Col xs={12} md={6} className="text-center">
                    <h1 className="mb-4 text-light">404 - Not Found</h1>
                    <Button variant="danger" onClick={() => {navigate('/')}}>
                        TORNA IN HOMEPAGE
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound