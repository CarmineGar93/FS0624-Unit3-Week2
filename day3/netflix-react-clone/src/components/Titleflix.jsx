import { Row, Col, Dropdown, ButtonGroup, Button } from "react-bootstrap"
import display1 from '../display1.svg'
import display2 from '../display2.svg'

function Titleflix(props) {
    return (
        <Row xs='auto' className="align-items-center">
            <Col>
                <h1 className="text-light">{props.title}</h1>
            </Col>
            <Col>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic" className="border border-1">
                        Genres
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Romantic</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Adventure</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Fantasy</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col className="ms-auto">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="dark"><img alt="" src={display1}></img></Button>
                    <Button variant="dark"><img alt="" src={display2}></img></Button>
                </ButtonGroup>
            </Col>
        </Row>
    )
}

export default Titleflix