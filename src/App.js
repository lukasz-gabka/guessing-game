import './stylesheets/App.css';
import { Container, Image, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Guess from './components/Guess';
import Next from './components/Next';

function App() {
  return ( 
    <Container fluid>
      <Row>
        <Image src="images/fruits/apple.jpg" id='guessingImage' fluid />
      </Row>

      <Row fluid className='justify-content-center mb-5'>
        <Guess letter="J" />
        <Guess letter="A"/>
        <Guess letter="B"/>
        <Guess letter="Ł"/>
        <Guess letter=""/>
        <Guess letter=""/>
      </Row>

      <Row fluid className="text-center">
        <Next />
      </Row>
    </Container>
  );
}

export default App;
