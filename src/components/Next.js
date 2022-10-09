import { Col } from "react-bootstrap";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import "../stylesheets/Next.css"

function Next() {
    return (
        <Col className="d-inline">
            <ArrowRightCircleFill className="next" size={80} onClick={() => alert("next")}/>
        </Col>
    );
}

export default Next;