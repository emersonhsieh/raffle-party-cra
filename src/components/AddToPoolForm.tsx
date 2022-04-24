import React, { useState } from "react";
import { ethers } from "ethers";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

interface CreateRaffleFormProps {
  runQuery: (raffleId: number, prizeToken: string, tokenId: number) => any;
}

export default function CreateRaffleForm(props: CreateRaffleFormProps) {
  const [loading, setLoading] = useState(false);

  const [raffleId, setRaffleId] = useState(0);
  const [prizeToken, setPrizeToken] = useState(ethers.constants.AddressZero);
  const [tokenId, setTokenId] = useState(0);

  const handleChangeRaffleId = (e: React.ChangeEvent<HTMLElement>) => {
    setTokenId(parseInt((e.target as HTMLInputElement).value));
  };

  const handleChangePrizeToken = (e: React.ChangeEvent<HTMLElement>) => {
    setPrizeToken((e.target as HTMLInputElement).value);
  };
  const handleChangeTokenId = (e: React.ChangeEvent<HTMLElement>) => {
    setTokenId(parseInt((e.target as HTMLInputElement).value));
  };

  const submitForm = async () => {
    setLoading(true);
    props.runQuery(raffleId, prizeToken, tokenId);
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
          <Form.Group className="mb-3">
            <Form.Label>Raffle ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="1275"
              onChange={handleChangeRaffleId}
            />
          </Form.Group>
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
          <br />
          <Button variant="primary" size="sm" onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}
