import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { useState } from "react";

function Welcome() {
    const [show, setShow] = useState(true);
    return (
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <Alert show={show} variant="success">
                        <Alert.Heading>Benvenuto/a</Alert.Heading>
                        <p className="mb-0">
                            Se sei un'appasionato di lettura e vorresti comprare un nuovo libro sei nel posto giusto.
                        </p>
                        <p>
                            Qui potrai trovare tutti i libri che vuoi in base ai tuoi generi letterari preferiti
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Close me
                            </Button>
                        </div>
                    </Alert>

                    {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
                </Col>
                <Col className="mt-4">
                    <h1 className="text-center">Bacheca Libri</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome