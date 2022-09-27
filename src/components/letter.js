import { Col } from "react-bootstrap";

function Letter(props) {
    return (
        <Col md='auto' className='mx-3 letter d-inline'>
          <p>{props.letter}</p>
        </Col>
    );
}

export default Letter;