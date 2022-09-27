import './stylesheets/App.css';
import { Container, Image, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Letter from './components/letter';

function App() {
  return ( 
    <Container fluid>
      <Row>
        <Image src="images/fruits/apple.jpg" id='guessingImage' fluid />
      </Row>
      <Row fluid className='justify-content-center'>
        <Letter letter="J" />
        <Letter letter="A"/>
        <Letter letter="B"/>
        <Letter letter="Ł"/>
        <Letter letter=""/>
        <Letter letter=""/>
        
      </Row>
    </Container>
  );
}

export default App;
