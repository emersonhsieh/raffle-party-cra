import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";
import QueryForm from "../components/QueryForm";

export default function Home() {
  const [searchParams] = useSearchParams();
  const [raffleId, setRaffleId] = useState(0);

  // function buyTicketEth(uint256 raffleId, uint96 ticketCount) public payable {
  // function claimPrize( address to, uint256 raffleId, uint256 prizeIndex, uint256 ticketPurchaseIndex
  // function claimSales(address account, uint256 raffleId) public {

  useEffect(() => {
    setRaffleId(parseInt(searchParams.get("id") || "0"));
    // fetch raffle information
  }, []);

  function buyTicket(ticketcount: number) {
    // buy ticket using raffleId
  }

  function buyTicketEth(ticketCount: number) {
    // buy ticket eth
  }

  async function claimPrize(
    to: string,
    raffleId: number,
    prizeIndex: number,
    ticketPurchaseIndex: number
  ) {}

  async function claimSales(account: string, raffleId: number) {}

  return (
    <>
      <Header title="Raffle Party" activeTab="ADD_TO_POOL" />
      <Container>
        <Row>
          <Col md={12} style={{ marginTop: 36 }}>
            <h3>Raffle #{raffleId}</h3>
            <p className="lead">Raffles Institution</p>
            <QueryForm buyTicket={buyTicket} buyTicketEth={buyTicketEth} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
