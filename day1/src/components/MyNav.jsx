import { Navbar, Container, Nav} from 'react-bootstrap'

function MyNav() {
    return (
        <Navbar expand="md" className="bg-dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#">BookforEveryone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" activeKey="#home">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav