import { Container, Row, Col, Button } from "react-bootstrap"
import facebook from '../facebook.svg'
import instagram from '../instagram.svg'
import twitter from '../twitter.svg'
import youtube from '../youtube.svg'

function Footerflix() {
    return (
        <Container>
            <Row className="justify-content-lg-center">
                <Col xs={12} lg={7}>
                    <Row className="mb-2 justify-content-lg-start justify-content-center" xs='auto'>
                        <Col>
                            <img src={facebook} alt="" />
                        </Col>
                        <Col>
                            <img src={instagram} alt="" />
                        </Col>
                        <Col>
                            <img src={twitter} alt="" />
                        </Col>
                        <Col>
                            <img src={youtube} alt="" />
                        </Col>
                    </Row>

                    <Row className="g-1 mb-2" xs={1} sm={4}>
                        <Col className="text-center text-lg-start">
                            <p className="text-secondary my-1">Audio and Subtitles</p>
                            <p className="text-secondary my-1">Media center</p>
                            <p className="text-secondary my-1">Privacy</p>
                            <p className="text-secondary my-1">Contact us</p>
                        </Col>
                        <Col className="text-center text-lg-start">
                            <p className="text-secondary my-1">Audio description</p>
                            <p className="text-secondary my-1">Investor Relations</p>
                            <p className="text-secondary my-1">Legal Noticies</p>
                        </Col>
                        <Col className="text-center text-lg-start">
                            <p className="text-secondary my-1">Help Center</p>
                            <p className="text-secondary my-1">Jobs</p>
                            <p className="text-secondary my-1">Cookie Preferences</p>
                        </Col>
                        <Col className="text-center text-lg-start">
                            <p className="text-secondary my-1">Gift Cards</p>
                            <p className="text-secondary my-1">Terms of Use</p>
                            <p className="text-secondary my-1">Corporate Information</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center justify-content-lg-start" xs="auto">
                        <Col className="mb-2">
                        <Button variant="outline-secondary">Service code</Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-center justify-content-lg-start" xs="auto">
                        <Col className="mb-2">
                        <p className="text-secondary"> &copy; 1997-2019 Netflix, Inc</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Footerflix