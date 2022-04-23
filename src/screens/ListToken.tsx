import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header title="Raffle Party" activeTab="LIST_TOKEN" />
      <Container>
        <Row>
          <Col md={12} className="mt-2">
            <h3>List Token</h3>
            <p className="lead">Hello world</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
