import {Spinner} from 'react-bootstrap'

function Loading() {
    return (
        <div className="text-center">
            <Spinner animation="border" variant="success" />
        </div>
    )
}

export default Loading