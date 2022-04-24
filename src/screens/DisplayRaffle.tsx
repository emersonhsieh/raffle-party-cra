import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";

export default function Home() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const raffleId = searchParams.get("id");

    // fetch raffle information
  }, []);

  return (
    <>
      <Header title="Raffle Party" activeTab="ADD_TO_POOL" />
      <Container>
        <Row>
          <Col md={12} style={{ marginTop: 36 }}>
            <h3>Display Raffle</h3>
            <p className="lead">Raffles Institution</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
