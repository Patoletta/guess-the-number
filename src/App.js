import { Col, Container, Row } from "react-bootstrap";
import Button from "./components/Button";

function App() {
  const handleIncrement = () => {
    console.log("incrementa");
  }
  const handleDecrement = () => {
    console.log("decrementa");
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello World!</h1>
          <Row>
            <Col><Button label="Incrementa" variant="success" onClick={handleIncrement}/></Col>
            <Col><Button label="Decrementa" variant="danger" onClick={handleDecrement}/></Col>
            <Col><Button/></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
