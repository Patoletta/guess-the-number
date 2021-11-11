import { Col, Container, Row } from "react-bootstrap";
import Button from "../components/Button";
import Title from "../components/Title";

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
          <Title label="Good morning y'all!" background="yellow"/>
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
