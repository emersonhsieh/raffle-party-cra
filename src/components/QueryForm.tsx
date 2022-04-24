import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

interface QueryFormProps {
  buyTicket: (s: number) => any;
  buyTicketEth: (s: number) => any;
}

export default function QueryForm(props: QueryFormProps) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(0);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLElement>) => {
    setTitle(parseInt((e.target as HTMLInputElement).value));
  };

  const submitForm = async () => {
    setLoading(true);
    props.buyTicket(title);
    setLoading(false);
    console.log("loading...");
  };

  const submitFormEth = async () => {
    setLoading(true);
    props.buyTicketEth(title);
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
          <Form.Group controlId="title">
            {/* <Form.Label>Query</Form.Label> */}
            <Form.Control
              type="number"
              placeholder="Query"
              onChange={handleChangeTitle}
              required
            />
          </Form.Group>
          <br />
          <Button variant="primary" size="sm" onClick={submitForm}>
            Buy with $TOKEN
          </Button>
          &nbsp; &nbsp;
          <Button variant="info" size="sm" onClick={submitFormEth}>
            Buy with ETH
          </Button>
        </Form>
      )}
    </div>
  );
}
