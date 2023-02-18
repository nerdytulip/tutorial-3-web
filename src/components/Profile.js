import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

export const Profile = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");

  return (
    // Referenced Container from : https://react-bootstrap.github.io/layout/grid/
    <Container
      style={{
        width: "30rem",
        height: "38rem",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      {/* Referenced Card from : https://react-bootstrap.github.io/components/cards/ */}
      <Card className="mx-auto" border="info" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            <u>Profile Info</u>
          </Card.Title>
          <Card.Text></Card.Text>
          <ListGroup bg={"secondary"} className="list-group-flush">
            <ListGroup.Item>
              <h6>First Name : </h6>
              {firstName}
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Last Name : </h6>
              {lastName}
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Email : </h6>
              {email}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};
