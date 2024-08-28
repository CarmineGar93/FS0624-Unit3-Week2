import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";


function Movieflix(props) {
    const[isLoading, setIsLoading] = useState(true)
    const[isError, setIsError] = useState(false)
    const[movies, setMovies] = useState({
        Search: []
    })
    const navigate = useNavigate()

    const retrieveMovies = async () => {
        try {
            const Url = 'https://www.omdbapi.com/?apikey=dc4b59b5&s='
            const response = await fetch(Url + props.searched + '&type=' + props.genre)
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setMovies(data)
                setIsLoading(false)
            } else {
                throw new Error('Errore nella ricerca')
            }

        } catch (err) {
            console.log('Errore')
            setIsLoading(false)
            setIsError(true)
        }

    }
    
    useEffect(() => {
        setIsLoading(true)
        retrieveMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.searched])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const spinners = []
    for (let i = 0; i < 6; i++) {
        spinners.push(<Spinner animation="grow" variant="light" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)
    }
    return (

        <Container fluid className="mb-3">
            <Row className="mb-3">
                <Col>
                    <h2 className="text-light">Results for {props.searched}</h2>
                </Col>
            </Row>
            {
                isLoading ? (
                    <Row xs={1} sm={2} lg={3} xl={6} className="gy-3">
                        {spinners.map(((spinner, i) => {
                            return (

                                <Col key={i} className="text-center">
                                    {spinner}
                                </Col>

                            )
                        }))
                        }
                    </Row>
                ) : isError ? <h3 className="text-light custom-margin">Server Error - Try Later</h3> : 
                movies.Response === 'False' ? <h3 className="text-light custom-margin">No results found</h3> : 
                movies.Search.length < 6 ? (
                    <Row xs={1} sm={2} lg={3} xl={6} className="gy-3">
                        {
                            movies.Search.map((movie) => {
                                if (movie.Poster !== 'N/A') {
                                    return (

                                        <Col key={movie.imdbID} className="text-center">
                                            <img src={movie.Poster} alt="" className="img-fluid customized" onClick={() => navigate('/details/' + movie.imdbID)}/>
                                        </Col>

                                    )

                                } else {
                                    return <></>
                                }
                            })
                        }
                    </Row>
                ) : (
                    <Slider {...settings}>
                        {
                            movies.Search.map((movie) => {
                                if (movie.Poster !== 'N/A') {
                                    return (
                                        <div key={movie.imdbID}>
                                            <img src={movie.Poster} alt="" className="w-100 customized" onClick={() => navigate('/details/' + movie.imdbID)}/>
                                        </div>
                                    )
                                } else {
                                    return <></>
                                }
                            })
                        }
                    </Slider>
                )
            }
        </Container>
    )
}


export default Movieflix