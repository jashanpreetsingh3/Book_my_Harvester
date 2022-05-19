import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function AboutScreen() {
  return (
    <div>
      <h1>About Us</h1>
      <br></br>
      <div>
        <h3>What we provide</h3>
        <p>
          We provide hassle free harvester booking for farmers. Currently
          farmers have no option but to rely upon first come first served basis,
          in which farmers have no gurantee when or if the harvester will show
          up. We empower farmers by giving them various options for harvester
          machinery for online booking by charging a small piece of the rent in
          advance.
        </p>
        <br></br>
      </div>
      <div>
        <h3>Team</h3>
        <Row>
          <Col md={6}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="images/team2.jpg" />
              <Card.Body>
                <Card.Title>Arjun Rana</Card.Title>
                <Card.Text>
                  <ul>
                    <li>MCA</li>
                    <li>Chitkara University</li>
                  </ul>
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="images/team1.jpg" />
              <Card.Body>
                <Card.Title>Jashanpreet Singh</Card.Title>
                <Card.Text>
                  <ul>
                    <li>MCA</li>
                    <li>Chitkara University</li>
                  </ul>
                </Card.Text>
                <Button variant="primary">Contact</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
