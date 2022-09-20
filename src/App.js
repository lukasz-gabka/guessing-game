import './stylesheets/App.css';
import { Container, Image, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <Container fluid>
      <Row>
        <Image src="images/fruits/apple.jpg" id='guessingImage' fluid />
      </Row>
    </Container>
  );
}

export default App;
