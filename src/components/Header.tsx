import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { useEthers } from "@usedapp/core";

interface HeaderProps {
  title: string;
  activeTab: string;
}

export default function Header(props: HeaderProps) {
  const { activateBrowserWallet, deactivate, account } = useEthers();

  function handleWalletLogin(): void {
    activateBrowserWallet();
  }

  function handleWalletLogout(): void {
    deactivate();
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="/">Raffle Party</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/raffle">Raffle</Nav.Link>
            <Nav.Link href="/list-token">Create Listing</Nav.Link>
            <Nav.Link href="/add-to-pool">Add to Pool</Nav.Link>
          </Nav>
          <Nav>
            {account ? (
              <Nav.Link onClick={handleWalletLogout}>
                {account.substring(0, 12) + "..."}
              </Nav.Link>
            ) : (
              <Nav.Link onClick={handleWalletLogin}>
                Connect with Metamask
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
