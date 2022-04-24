import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";
import CreateRaffleForm from "../components/AddToPoolForm";

export default function Home() {
  async function runQuery(
    raffleId: number,
    prizeToken: string,
    tokenId: number
  ) {
    // Call contract
    return null;
  }
  return (
    <>
      <Header title="Create Raffle" activeTab="CREATE_RAFFLE" />
      <Container>
        <Row>
          <Col md={12} style={{ marginTop: 36 }}>
            <h3>Add to Raffle Pool</h3>
            <p className="lead">Add your token to the raffle pool!</p>
            <CreateRaffleForm runQuery={runQuery} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
