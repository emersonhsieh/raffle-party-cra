import React from "react";
import { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";

export default function Home() {
  useEffect(() => {
    // Fetch all raffles
  }, []);

  return (
    <>
      <Header title="Raffle Party" activeTab="HOME" />
      <Container>
        <Row>
          <Col md={12} style={{ marginTop: 36 }}>
            <h3>Home</h3>
            <p className="lead">Available Raffles</p>
          </Col>
        </Row>
      </Container>
      {/* List all raffles */}
      <Container>
        <Row>
          <Col md={3} style={{ marginTop: 36 }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://amsterdam.ethglobal.com/img/windmill.svg"
              />
              <Card.Body>
                <Card.Title>NFT for raffle</Card.Title>
                <Card.Text>ongoing raffle.</Card.Text>
                <Button variant="primary">Raffle</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
