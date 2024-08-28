import { Container, Row, Col, Card, Button, Spinner, ListGroup, ListGroupItem} from "react-bootstrap"
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import  logostar  from '../star.svg'

function MovieDetails () {
    const navigate = useNavigate()
    const params = useParams()
    const[movie, setMovie] = useState({})
    const[comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchMovie = async() => {
        try {
            const Url = 'https://www.omdbapi.com/?apikey=dc4b59b5&i='
            const response = await fetch(Url + params.movieId)
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                if(data.Response === 'True') {
                    setMovie(data)
                    setIsLoading(false)
                } else {
                    navigate('/notfound')
                }
                
            } else {
                throw new Error('Errore nella ricerca')
            }

        } catch (err) {
            console.log('Errore')
            setIsLoading(false)
            
        }
    }

    const fetchComments = async() => {
        try {
            const Url2 = 'https://striveschool-api.herokuapp.com/api/comments/'
            const response = await fetch(Url2 + params.movieId, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmM3NDI4YWI5NjAwMTU2NjRmMGUiLCJpYXQiOjE3MjQzMjkwNzYsImV4cCI6MTcyNTUzODY3Nn0.Si6MDHOC4QOt-RT6rUZF7zUYk6RqmKdoPXyQKANzAYw"
                },
            })
            if (response.ok) {
                const comments = await response.json()
                console.log(comments)                
                    setComments(comments)
            } else {
                throw new Error('Errore nella ricerca')
            }

        } catch (err) {
            console.log('Errore')            
        }
    }

    useEffect(() => {
        console.log(params)
        fetchMovie()
        fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Row className=" justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    {
                        isLoading ? (
                            <div className="text-center">
                                <Spinner animation='border' variant='success' />
                            </div>
                        ) : (
                            <Card className='text-center'>
                                <Card.Img variant="top" src={movie.Poster} className="customized2"/>
                                <Card.Body>
                                    <Card.Title className="fs-2 fw-bold">{movie.Title}</Card.Title>
                                    <Card.Text>
                                        {movie.Plot}
                                    </Card.Text>
                                    <Card.Title>Cast</Card.Title>
                                    <Card.Text>
                                        {movie.Actors}
                                    </Card.Text>
                                    <Card.Title>Comments</Card.Title>
                                    <ListGroup className="text-center mb-3">
                                        {
                                            comments.length === 0 ? (
                                            <ListGroupItem>No Comments Found</ListGroupItem>
                                        ) : (
                                            comments.map((comment) => {
                                                const star = []
                                                for (let i = 0; i < comment.rate; i++) {
                                                    star.push(<span key={i} className="d-flex align-items-center"><img src={logostar} alt="" /></span>)
                                                }
                                                return (
                                                    <ListGroup.Item key={comment._id} className="d-flex align-items-center">
                                                        <div className="ms-1">
                                                            <div className="d-flex align-items-center">
                                                                <i>Rate: &nbsp;</i>
                                                                {
                                                                    star.map((stars) => {
                                                                        return stars
                                                                    })
                                                                }
                                                            </div>
                        
                                                            <span><i>Commento:</i> {comment.comment} </span>
                                                        </div>
                                                    </ListGroup.Item>)
                                            })
                                        )
                                        }
                                    </ListGroup>
                                    <Button variant="danger" onClick={() => { navigate('/') }}>Torna alla home</Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails