import React, { useState } from "react";
import { ethers } from "ethers";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

interface CreateRaffleFormProps {
  runQuery: (
    prizeToken: string,
    tokenId: number,
    paymentToken: string,
    startTimestamp: Date,
    endTimestamp: Date,
    ticketPrice: number,
    minTickets: number,
    partyPrizeToken: string,
    weight: number
  ) => any;
}

export default function CreateRaffleForm(props: CreateRaffleFormProps) {
  const [loading, setLoading] = useState(false);

  const [prizeToken, setPrizeToken] = useState(ethers.constants.AddressZero);
  const [tokenId, setTokenId] = useState(0);
  const [paymentToken, setPaymentToken] = useState(
    ethers.constants.AddressZero
  );
  const [startTimestamp, setStartTimestamp] = useState(new Date());
  const [endTimestamp, setEndTimestamp] = useState(new Date());
  const [ticketPrice, setTicketPrice] = useState(1);
  const [minTickets, setMinTickets] = useState(1);
  const [partyPrizeToken, setPartyPrizeToken] = useState(
    ethers.constants.AddressZero
  );
  const [weight, setWeight] = useState(1);

  const handleChangePrizeToken = (e: React.ChangeEvent<HTMLElement>) => {
    setPrizeToken((e.target as HTMLInputElement).value);
  };
  const handleChangeTokenId = (e: React.ChangeEvent<HTMLElement>) => {
    setTokenId(parseInt((e.target as HTMLInputElement).value));
  };
  const handleChangePaymentToken = (e: React.ChangeEvent<HTMLElement>) => {
    setPaymentToken((e.target as HTMLInputElement).value);
  };
  const handleChangeStartTimestampDate = (
    e: React.ChangeEvent<HTMLElement>
  ) => {
    const dateObject = new Date((e.target as HTMLInputElement).value);
    const newStartTimestamp = new Date(startTimestamp);
    newStartTimestamp.setUTCFullYear(
      dateObject.getFullYear(),
      dateObject.getMonth(),
      dateObject.getDate()
    );
    setStartTimestamp(newStartTimestamp);
  };
  const handleChangeStartTimestampTime = (
    e: React.ChangeEvent<HTMLElement>
  ) => {
    const dateObject = new Date((e.target as HTMLInputElement).value);
    const newStartTimestamp = new Date(startTimestamp);
    newStartTimestamp.setUTCHours(dateObject.getUTCHours());
    newStartTimestamp.setUTCMinutes(dateObject.getUTCMinutes());
    newStartTimestamp.setUTCSeconds(dateObject.getUTCSeconds());
    setStartTimestamp(newStartTimestamp);
  };
  const handleChangeEndTimestampDate = (e: React.ChangeEvent<HTMLElement>) => {
    const dateObject = new Date((e.target as HTMLInputElement).value);
    const newEndTimestamp = new Date(endTimestamp);
    newEndTimestamp.setUTCFullYear(
      dateObject.getFullYear(),
      dateObject.getMonth(),
      dateObject.getDate()
    );
    setEndTimestamp(newEndTimestamp);
  };
  const handleChangeEndTimestampTime = (e: React.ChangeEvent<HTMLElement>) => {
    const dateObject = new Date((e.target as HTMLInputElement).value);
    const newEndTimestamp = new Date(endTimestamp);
    newEndTimestamp.setUTCHours(dateObject.getUTCHours());
    newEndTimestamp.setUTCMinutes(dateObject.getUTCMinutes());
    newEndTimestamp.setUTCSeconds(dateObject.getUTCSeconds());
    setEndTimestamp(newEndTimestamp);
  };
  const handleChangeTicketPrice = (e: React.ChangeEvent<HTMLElement>) => {
    setTicketPrice(parseInt((e.target as HTMLInputElement).value));
  };
  const handleChangeMinTickets = (e: React.ChangeEvent<HTMLElement>) => {
    setMinTickets(parseInt((e.target as HTMLInputElement).value));
  };
  const handleChangePartyPrizeToken = (e: React.ChangeEvent<HTMLElement>) => {
    setPartyPrizeToken((e.target as HTMLInputElement).value);
  };
  const handleChangeWeight = (e: React.ChangeEvent<HTMLElement>) => {
    setWeight(parseInt((e.target as HTMLInputElement).value));
  };

  const submitForm = async () => {
    setLoading(true);
    props.runQuery(
      prizeToken,
      tokenId,
      paymentToken,
      startTimestamp,
      endTimestamp,
      ticketPrice,
      minTickets,
      partyPrizeToken,
      weight
    );
    setLoading(false);
    console.log("loading...");
  };

  return (
    <div>
      {loading && (
        <span>
          <Spinner animation="grow" variant="info" />
          &nbsp;Querying...
        </span>
      )}
      {!loading && (
        <Form>
          {/* const handleChangePrizeToken = (e: React.ChangeEvent<HTMLElement>) => {
              const handleChangeTokenId = (e: React.ChangeEvent<HTMLElement>) => {
              const handleChangePaymentToken = (e: React.ChangeEvent<HTMLElement>) => {
              const handleChangeStartTimestamp = (e: React.ChangeEvent<HTMLElement>) => {
              const handleChangeEndTimestamp = (e: React.ChangeEvent<HTMLElement>) => {
              const handleChangeTicketPrice = (e: React.ChangeEvent<HTMLElement>) => {
              const handleChangeMinTickets = (e: React.ChangeEvent<HTMLElement>) => {
            */}
          <Form.Group className="mb-3">
            <Form.Label>Prize Token Address (ERC-721)</Form.Label>
            <Form.Control
              type="text"
              placeholder="0x8ffb9b504d497e4000967391e70D542b8cC6748A"
              onChange={handleChangePrizeToken}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Token ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="1275"
              onChange={handleChangeTokenId}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Payment Token (ERC-20)</Form.Label>
            <Form.Control
              type="text"
              placeholder="0x807a0774236A0fBE9e7f8E7Df49EDFED0e6777Ea"
              onChange={handleChangePaymentToken}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Start Date (UTC)</Form.Label>
            <Form.Control
              type="date"
              placeholder="2020-02-02"
              onKeyDown={(e) => e.preventDefault()}
              onChange={handleChangeStartTimestampDate}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Start Time (UTC)</Form.Label>
            <Form.Control
              type="time"
              placeholder="2020-02-02"
              onKeyDown={(e) => e.preventDefault()}
              onChange={handleChangeStartTimestampTime}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End Date (UTC)</Form.Label>
            <Form.Control
              type="date"
              placeholder="2020-02-02"
              onKeyDown={(e) => e.preventDefault()}
              onChange={handleChangeEndTimestampDate}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End Time (UTC)</Form.Label>
            <Form.Control
              type="time"
              placeholder="2020-02-02"
              onChange={handleChangeEndTimestampTime}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ticket Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="1"
              onChange={handleChangeTicketPrice}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Min Tickets</Form.Label>
            <Form.Control
              type="number"
              placeholder="1"
              onChange={handleChangeMinTickets}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pool Prize Token Address (ERC-721)</Form.Label>
            <Form.Control
              type="text"
              placeholder="1"
              onChange={handleChangePartyPrizeToken}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pool Prize Token Weight (basis points)</Form.Label>
            <Form.Control
              type="number"
              placeholder="1"
              onChange={handleChangeWeight}
            />
          </Form.Group>
          <br />
          <Button variant="primary" size="sm" onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}
