import React from "react";
import { ethers } from "ethers";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";
import CreateRaffleForm from "../components/CreateRaffleForm";

import { RaffleParty__factory } from "../typechain";
import { RAFFLE_ADDRESS, NETWORK_PROVIDER } from "../constants/Constants";

export default function Home() {
  async function runQuery(
    prizeToken: string,
    tokenId: number,
    paymentToken: string,
    startTimestamp: Date,
    endTimestamp: Date,
    ticketPrice: number,
    minTickets: number
  ) {
    // Create raffle!
    const provider = ethers.getDefaultProvider(NETWORK_PROVIDER);
    const raffle = RaffleParty__factory.connect(RAFFLE_ADDRESS, provider);
    await raffle.createRaffle(
      prizeToken,
      tokenId,
      paymentToken,
      startTimestamp.toISOString(),
      endTimestamp.toISOString(),
      ticketPrice,
      minTickets
    );
    return null;
  }
  return (
    <>
      <Header title="Create Raffle" activeTab="CREATE_RAFFLE" />
      <Container>
        <Row>
          <Col md={12} style={{ marginTop: 36 }}>
            <h3>Create Raffle</h3>
            <p className="lead">Create your raffle here!</p>
            <CreateRaffleForm runQuery={runQuery} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
