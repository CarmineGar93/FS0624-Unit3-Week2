import { useState } from "react";
import { Col, Container, Row, Form } from 'react-bootstrap'
import SingleBook from "./SingleBook";
import CommentArea from './CommentArea'

function BookList({ array }) {
    const [searched, setSearched] = useState('')
    const [selected, setSelected] = useState('')

    const handleChange = (e) => {
        setSearched(e.target.value)
    }
    const retriveBook = (data) => {
        setSelected(data)
    }
    const filtered = array.filter((libro) => {
        return libro.title.toLowerCase().includes(searched.toLowerCase())
    })
    const filtered2 = filtered.length > 40 ? filtered.slice(0, 40) : filtered
    return (
        <Container fluid className='mb-5'>
            <Row className="vh-100">
                <Col xs={6} lg={8} className="overflow-y-scroll vh-100">
                    <Row className="j justify-content-center">
                        <Col xs={12} md={6}>
                            <h2 className="text-center">Cerca i tuoi libri</h2>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Ricerca"
                                        value={searched}
                                        onChange={(e) => handleChange(e)} required data-testid='ricerca'/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row xs={1} sm={2} lg={3} xl={4} className='gy-4'>
                        {
                            filtered2.map((libro, i) => {
                                return (
                                    <Col key={i}>
                                        <SingleBook libro={libro} retrieve={retriveBook} selected={selected} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
                <Col xs={6} lg={4} className=" overflow-y-scroll vh-100 py-5">
                    <CommentArea selected={selected} />
                </Col>
            </Row>

        </Container>
    )
}


export default BookList