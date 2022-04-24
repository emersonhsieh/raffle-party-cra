import React from "react";
import { ethers } from "ethers";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";
import CreateRaffleForm from "../components/AddToPoolForm";

import { RaffleParty__factory } from "../typechain";
import { RAFFLE_ADDRESS, NETWORK_PROVIDER } from "../constants/Constants";

export default function Home() {
  async function runQuery(
    raffleId: number,
    prizeToken: string,
    tokenId: number
  ) {
    // Add to pool!
    const provider = ethers.getDefaultProvider(NETWORK_PROVIDER);
    const raffle = RaffleParty__factory.connect(RAFFLE_ADDRESS, provider);
    await raffle.addPoolPrize(raffleId, prizeToken, tokenId);
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
