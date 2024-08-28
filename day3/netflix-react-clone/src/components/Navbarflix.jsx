import { Navbar, Container, Nav, NavItem, Dropdown, NavLink, Form, Row, Col, Button } from 'react-bootstrap'
import search from '../search.svg'
import bell from '../bell.svg'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbarflix(props) {
    const [isHovered, setIsHovered] = useState(false)
    const [research, setResearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.childToParent(research)

    }
    const location = useLocation()
    const isActive = (search) => {
        return location.pathname === search ? 'nav-link active' : 'nav-link'
      }
    return (
        <Navbar expand="md" >
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img width={100} src='netflix_logo.png' alt=''>
                    </img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className={isActive('/')}
                            onClick={() => {
                                props.childToParent('')
                                setResearch('')
                            }}>Home</Link>
                        <Link to='/shows' className={isActive('/shows')}
                            onClick={() => {
                                props.childToParent('')
                                setResearch('')
                            }}>Tv Shows</Link>
                        <Link to='/movies' className={isActive('/movies')}
                            onClick={() => {
                                props.childToParent('')
                                setResearch('')
                            }}>Movies</Link>
                        <Link to='/details' className='disabled nav-link'>Movie Details</Link>
                        <Nav.Link href="#">Add MyList</Nav.Link>
                    </Nav>
                    <Nav className='align-items-md-center '>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}><img alt='' src='kids_icon.png' width={30}></img></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item><Link className='nav-link' to='/profile'>Profile</Link></Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form className='d-flex align-items-center' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                            onSubmit={(e) => handleSubmit(e)}>
                            <Row className='g-0'>
                                {
                                    isHovered && (
                                        <Col xs="auto">
                                            <Form.Control
                                                type="text"
                                                placeholder={location.pathname === '/shows' ? 'Search Tv Shows' : location.pathname === '/movies' ? 'Search Movies' : 'Search'}
                                                value={research}
                                                onChange={(e) => {
                                                    setResearch(e.target.value)
                                                    props.childToParent('')
                                                }
                                                }
                                            />
                                        </Col>
                                    )
                                }

                                <Col xs="auto">
                                    <Button type='submit' variant='outlined'><img alt='' src={search}></img></Button>
                                </Col>
                            </Row>
                        </Form>

                        <Nav.Link href="#">KIDS</Nav.Link>
                        <Nav.Link href="#"><img alt='' src={bell}></img></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}


export default Navbarflix