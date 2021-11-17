import { Col, Container, Row } from "react-bootstrap";
import Title from "../components/Title";
import { DashboardPage } from "./Dashboard/DashboardPage";


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Title label="Good morning y'all!" background="yellow" />
          <Row>
            <Col><DashboardPage /></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
