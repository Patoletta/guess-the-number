import { Col, Container, Row } from "react-bootstrap";
import Button from "./components/Button";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello World!</h1>
          <Row>
            <Col><Button label="Incrementa" variant="success"/></Col>
            <Col><Button label="Decrementa" variant="danger"/></Col>
            <Col><Button/></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
