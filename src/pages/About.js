import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <div className="py-5">
      <Container>
        <Zoom>
          <h2 className="text-center text-dark mb-4">
            WELCOME TO TRAVEL BD
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-dark">About Us</h5>
              <p className="text-muted">
                Travel BD, the world's largest travel guidance platform*, helps hundreds of millions of people each month** become better travelers, from planning to booking to taking a trip.
              </p>
              <p className="text-muted">
                Travelers across the globe use the Tripadvisor site and app to discover where to stay, what to do and where to eat based on guidance from those who have been there before. With more than 934 million reviews and opinions of nearly 8 million businesses, travelers turn to Tripadvisor to find deals on accommodations, book experiences, reserve tables at delicious restaurants and discover great places nearby. As a travel guidance company available in 43 markets and 22 languages, Tripadvisor makes planning easy no matter the trip type.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-dark">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-dark">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-dark"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "dark" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
