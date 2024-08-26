import { Component } from 'react'
import { Button, Card } from 'react-bootstrap'


class SingleBook extends Component {
    handleClick = () => {
        this.props.retrieve(this.props.libro.asin)
    }

    render() {
        const cardClicked = this.props.selected === this.props.libro.asin ? 'shadowing h-100' : 'h-100'
        return (
            <Card className={cardClicked}>
                <Card.Img variant="top" src={this.props.libro.img} onClick={(e) => this.handleClick(e)} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <Card.Title className='fs-5'>{this.props.libro.title}</Card.Title>
                    <Button variant="primary">$ {this.props.libro.price}</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default SingleBook