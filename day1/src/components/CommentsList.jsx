import { Button, ListGroup } from 'react-bootstrap'
import logostar from '../star.svg'
import trashlogo from '../trash.svg'

function CommentsList({ array, reload }) {
    const handleClick = async (e, id) => {
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
                    reload()
                } else {
                    throw new Error('Errore nella cancellazione del commento')
                }
            } catch (err) {
                alert(err)
            }
        }
    }
    return (
        <ListGroup>
            {
                array.length === 0 ? (
                    <ListGroup.Item>Nessun commento per questo libro</ListGroup.Item>
                ) : (
                    array.map((libro) => {
                        const star = []
                        for (let i = 0; i < libro.rate; i++) {
                            star.push(<span key={i} className="d-flex align-items-center"><img src={logostar} alt="" /></span>)
                        }
                        return (
                            <ListGroup.Item key={libro._id} className="d-flex align-items-center" data-testid='list-item'>
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
                                <Button onClick={(e) => handleClick(e, libro._id)} variant="danger" className="ms-auto"><img alt="" src={trashlogo} /></Button>
                            </ListGroup.Item>)
                    })
                )
            }

        </ListGroup>
    )
}


export default CommentsList