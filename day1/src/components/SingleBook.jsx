import { Button, Card } from 'react-bootstrap'


function SingleBook({ libro, retrieve, selected }) {
    const handleClick = () => {
        retrieve(libro.asin)
    }

    const cardClicked = selected === libro.asin ? 'shadowing h-100' : 'h-100'
    return (
        <Card className={cardClicked}>
            <Card.Img variant="top" src={libro.img} onClick={(e) => handleClick(e)} />
            <Card.Body className='d-flex flex-column justify-content-between'>
                <Card.Title className='fs-5'>{libro.title}</Card.Title>
                <Button variant="primary">$ {libro.price}</Button>
            </Card.Body>
        </Card>
    )
}


export default SingleBook