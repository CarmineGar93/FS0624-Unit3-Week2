import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap'

function ProfileFlix() {
    return (
        <Container>
            <Row xs={1} lg={2} className=' justify-content-center'>
                <Col>
                    <Row xs={1}>
                        <Col className='mb-2'>
                            <h1 className="text-light border-bottom border-1">Edit Profile</h1>
                        </Col>
                        <Col className='border-bottom border-1'>
                            <Row>
                                <Col xs={3}>
                                    <img src="avatar.png" alt="" className='w-100' />
                                </Col>
                                <Col xs={9}>
                                    <Row xs={1} className='py-3 border-bottom border-1'>
                                        <Col>
                                            <Form.Group className="mb-3">
                                                <Form.Control type="text" value='Carmine' />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label className='text-secondary-emphasis'>Language: </Form.Label>
                                                <Form.Select aria-label="Default select example" className='bg-black w-50'>
                                                    <option value="eng">English</option>
                                                    <option value="ita">Italian</option>
                                                    <option value="spa">Spanish</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row xs={1} className='py-3 border-bottom border-1'>
                                        <Col>
                                            <FormGroup>
                                                <Form.Label className='text-secondary-emphasis mb-1'>Maturity Settings: </Form.Label>
                                                <Form.Control type="button" value='ALL MATURITY RATINGS' readOnly className='bg-body-tertiary border-0 mb-1 p-1 px-2" w-75' />
                                            </FormGroup>
                                            <p className="text-light mb-3">Show titles of<strong> all maturity ratings</strong> for this profile.</p>
                                            <Button variant='outline-secondary' className='px-4'>EDIT</Button>
                                        </Col>
                                    </Row>
                                    <Row xs={1} className='py-3'>
                                        <Col>
                                            <p className="text-secondary-emphasis mb-1">Autoplay controls: </p>
                                            <Form.Group>
                                                <Form.Check type="checkbox" label="Autoplay next episode in a series on all devices." className='text-light'/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Check type="checkbox" label="Autoplay previews will browse on all devices." className='text-light'/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='px-2 mt-3 mb-5'>
                            <Row xs='auto' className='justify-content-around g-2 py-3"'>
                                <Col className='px-0'>
                                    <Button variant='outline-secondary' className='px-3'>SAVE</Button>
                                </Col>
                                <Col className='px-0'>
                                    <Button variant='outline-secondary' className='px-3'>CANCEL</Button>
                                </Col>
                                <Col className='px-0'>
                                    <Button variant='outline-secondary' className='px-3'>DELETE PROFILE</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default ProfileFlix