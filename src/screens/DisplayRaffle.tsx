import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useEthers } from "@usedapp/core";
import { useSearchParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";
import QueryForm from "../components/QueryForm";

import { RaffleParty__factory } from "../typechain";
import { RAFFLE_ADDRESS, NETWORK_PROVIDER } from "../constants/Constants";

export default function Home() {
  const [searchParams] = useSearchParams();
  const [raffleId, setRaffleId] = useState(0);

  const { account } = useEthers();

  // function buyTicketEth(uint256 raffleId, uint96 ticketCount) public payable {
  // function claimPrize( address to, uint256 raffleId, uint256 prizeIndex, uint256 ticketPurchaseIndex
  // function claimSales(address account, uint256 raffleId) public {

  useEffect(() => {
    setRaffleId(parseInt(searchParams.get("id") || "0"));
    // fetch raffle information
  }, []);

  function buyTicket(ticketCount: number) {
    const provider = ethers.getDefaultProvider(NETWORK_PROVIDER);
    const raffle = RaffleParty__factory.connect(RAFFLE_ADDRESS, provider);

    // buy ticket using raffleId
    raffle.buyTickets(raffleId, ticketCount);
  }

  function buyTicketEth(ticketCount: number) {
    const provider = ethers.getDefaultProvider(NETWORK_PROVIDER);
    const raffle = RaffleParty__factory.connect(RAFFLE_ADDRESS, provider);

    // buy ticket eth
    raffle.buyTicketsEth(raffleId, ticketCount);
  }

  function claimPrize(to: string, raffleId: number) {
    async function _claimPrize() {
      // claim prize if the user won
      const provider = ethers.getDefaultProvider(NETWORK_PROVIDER);
      const raffle = RaffleParty__factory.connect(RAFFLE_ADDRESS, provider);

      for (let i = 0; i < raffle.rafflePrizes.length; i++) {
        const winner = await raffle.getWinner(raffleId, i);
        if (winner !== account) {
          continue;
        }
        const winnerTicketId = await raffle.getWinnerTicketId(raffleId, i);
        const ticketPurchaseIndex = await raffle.getTicketPurchaseIndex(
          raffleId,
          winnerTicketId
        );
        await raffle.claimPrize(winner, raffleId, i, ticketPurchaseIndex);
      }
    }
    _claimPrize();
  }

  function claimSales(account: string, raffleId: number) {
    // claim sales if the user has any
    const provider = ethers.getDefaultProvider(NETWORK_PROVIDER);
    const raffle = RaffleParty__factory.connect(RAFFLE_ADDRESS, provider);
    raffle.claimSales(account, raffleId);
  }

  if (!account) {
    return (
      <>
        <Header title="Raffle Party" activeTab="ADD_TO_POOL" />
        <Container>
          <Row>
            <Col md={12} style={{ marginTop: 36 }}>
              <h3>Raffle #{raffleId}</h3>
              <p className="lead">Login on the top right</p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <Header title="Raffle Party" activeTab="ADD_TO_POOL" />
      <Container>
        <Row>
          <Col md={12} style={{ marginTop: 36 }}>
            <h3>Raffle #{raffleId}</h3>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="mt-4" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://amsterdam.ethglobal.com/img/windmill.svg"
              />
              <Card.Body>
                <Card.Title>Windmill #123</Card.Title>
                <Card.Text>This is a windmill blade.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <p className="lead mt-4">Purchase Tickets</p>
            <QueryForm buyTicket={buyTicket} buyTicketEth={buyTicketEth} />
          </Col>
          <Col md={4}>
            <p className="lead mt-4">Claim Prize</p>
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                claimPrize(account, raffleId);
              }}
            >
              Claim Prize
            </Button>
            <p className="lead mt-4">Claim Sales</p>
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                claimSales(account, raffleId);
              }}
            >
              Claim Sales
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
