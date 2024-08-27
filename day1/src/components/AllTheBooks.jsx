
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'

const jSons = {
    fantasy,
    history,
    horror,
    romance,
    scifi
}

function AllTheBooks ({genere}) {
        const data = jSons[genere]
        const random = []
        for (let i = 0; i < 6; i++) {
            let nRandom = Math.floor(Math.random() * data.length)
            random.push(data[nRandom])
        }
        return (
            <Container fluid className='mb-5'>
                <Row>
                    <Col>
                        <h2>{genere.toUpperCase()}</h2>
                    </Col>
                </Row>
                <Row xs={2} sm={3} lg={6} className='gy-4'>
                    {
                        random.map((libro) => {
                            return (
                                <Col key={libro.asin}>
                                    <Card className='h-100'>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className='d-flex flex-column justify-content-between'>
                                            <Card.Title className='fs-5'>{libro.title}</Card.Title>
                                            <Button variant="primary">$ {libro.price}</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }

export default AllTheBooks