import { Col } from "react-bootstrap";
import '../stylesheets/Guess.css';

function Guess(props) {
    return (
        <Col md='auto' className='mx-3 guess d-inline'>
          <p>{props.letter}</p>
        </Col>
    );
}

export default Guess;