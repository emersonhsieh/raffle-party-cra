import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useEthers } from "@usedapp/core";
import { useSearchParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
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
    raffle.buyTicket(raffleId, ticketCount);
  }

  function buyTicketEth(ticketCount: number) {
    const provider = ethers.getDefaultProvider(NETWORK_PROVIDER);
    const raffle = RaffleParty__factory.connect(RAFFLE_ADDRESS, provider);

    // buy ticket eth
    raffle.buyTicketEth(raffleId, ticketCount);
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
        await raffle.claimPrize(to, raffleId, winner, i);
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
            <QueryForm buyTicket={buyTicket} buyTicketEth={buyTicketEth} />
            <p className="lead">Claim Prize</p>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                claimPrize(account, raffleId);
              }}
            />
            <p className="lead">Claim Sales</p>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                claimSales(account, raffleId);
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
