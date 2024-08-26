import { Component } from "react";
import { Button, ListGroup } from 'react-bootstrap'
class CommentsList extends Component {
    state = {
        reloaded: false
    }
    handleClick = async (e, id) => {
        e.preventDefault()
        const sure = window.confirm('Sei sicuro?')
        if (sure) {
            try {
                const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
                const asin = id
                const response = await fetch(URL + asin, {
                    method: 'DELETE',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmM3NDI4YWI5NjAwMTU2NjRmMGUiLCJpYXQiOjE3MjQzMjkwNzYsImV4cCI6MTcyNTUzODY3Nn0.Si6MDHOC4QOt-RT6rUZF7zUYk6RqmKdoPXyQKANzAYw"
                    }
                })
                if (response.ok) {
                    alert('Recensione cancellata correttamente')
                    this.setState({ reloaded: true })
                } else {
                    throw new Error('Errore nella cancellazione del commento')
                }
            } catch (err) {
                alert(err)
            }
        }
    }
    render() {
        return (
            <ListGroup>
                {
                    this.props.array.length === 0 ? (
                        <ListGroup.Item>Nessun commento per questo libro</ListGroup.Item>
                    ) : (
                        this.props.array.map((libro) => {
                            const star = []
                            for (let i = 0; i < libro.rate; i++) {
                                star.push(<span key={i} className="d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg></span>)
                            }
                            return (
                                <ListGroup.Item key={libro._id} className="d-flex align-items-center">
                                    <div className="ms-1">
                                        <div className="d-flex align-items-center">
                                            <i>Rate: &nbsp;</i>
                                            {
                                                star.map((stars) => {
                                                    return stars
                                                })
                                            }
                                        </div>

                                        <span><i>Commento:</i> {libro.comment} </span>
                                    </div>
                                    <Button onClick={(e) => this.handleClick(e, libro._id)} variant="danger" className="ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                    </svg></Button>
                                </ListGroup.Item>)
                        })
                    )
                }

            </ListGroup>
        )
    }
}

export default CommentsList