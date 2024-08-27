import { Component } from "react";
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component {
    state = {
        newComment: {
            comment: '',
            rate: '1',
            elementId: this.props.id
        }
    }
    handleChange = (e, prop) => {
        this.setState({
            newComment: {
                ...this.state.newComment,
                [prop]: e.target.value
            }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
            const send = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MmM3NDI4YWI5NjAwMTU2NjRmMGUiLCJpYXQiOjE3MjQzMjkwNzYsImV4cCI6MTcyNTUzODY3Nn0.Si6MDHOC4QOt-RT6rUZF7zUYk6RqmKdoPXyQKANzAYw"
                },
                body: JSON.stringify(this.state.newComment)
            })
            if (send.ok) {
                alert('Recensione salvata correttamente')
                this.props.reload()
                this.setState({
                    newComment: {
                        comment: '',
                        rate: '1',
                        elementId: this.props.id
                    }
                })
            } else {
                throw new Error('Errore nel salvataggio del commento')
            }
        } catch (err) {
            alert(err)
        }
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="mt-3">
                <Form.Group className="mb-1">
                    <Form.Label className="mb-1">Recensione</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Scrivi la tua recensione"
                    value={this.state.newComment.comment}
                    onChange={(e) => this.handleChange(e, 'comment')} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="mb-1">Rating</Form.Label>
                    <Form.Select 
                    aria-label="Default select example"
                    value={this.state.newComment.rate}
                    onChange={(e) => this.handleChange(e, 'rate')}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="success" type="submit">
        Invia recensione
      </Button>
            </Form>
        )
    }
}

export default AddComment