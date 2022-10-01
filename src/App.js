import './stylesheets/app.css';
import { Container, Image, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Guess from './components/guess';

function App() {
  return ( 
    <Container fluid>
      <Row>
        <Image src="images/fruits/apple.jpg" id='guessingImage' fluid />
      </Row>
      <Row fluid className='justify-content-center'>
        <Guess letter="J" />
        <Guess letter="A"/>
        <Guess letter="B"/>
        <Guess letter="Ł"/>
        <Guess letter=""/>
        <Guess letter=""/>
      </Row>
    </Container>
  );
}

export default App;
