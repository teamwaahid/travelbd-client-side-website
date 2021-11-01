import React from "react";
import { Col, Container, Form, Row, CardGroup, Card } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import Place from "../components/place/Place.js";
import Spinner from 'react-bootstrap/Spinner'

const Home = () => {
  const { places } = useAuth();
  const formStyle = { background: "transparent", color: "dark" };

  return (
    <div>
      {/* Banner Section */}
      <div
        style={{
          background: `url(https://wallpaperfordesktop.com/wp-content/uploads/2021/07/Landscape-Background-Images.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white">Discover The World</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
                  A world of exceptional destinations for you
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to="/places"
                  className="rounded-pill btn btn-primary fs-5 py-2 px-4"
                >
                  View Places
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>

      {/* Why Choose Card section */}
      <div className="py-5">
        <div className="text-center text-dark pb-5">
          <Slide left>
            <h1>Why You Choose Us!!!</h1>
          </Slide>
        </div>
        <Container>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCXuctePf4zYAShKZvYdKrNYbtDdpBi9zpa-fyLBuuE1UHOyi7HyMDbmW0SRZgh5bkBeU&usqp=CAU" style={{ height: '25vh' }} />
              <Card.Body>
                <Card.Title>Search for the best flight deals</Card.Title>
                <Card.Text>
                  Search for the best flight deals from 900+ travel sites. No need to search multiple websites, KAYAK allows you to compare all of them in one place.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://surfiran.com/wp-content/uploads/2020/06/Book-Iran-Tours-with-Flexibility.jpg" style={{ height: '25vh' }} />
              <Card.Body>
                <Card.Title>Book with flexibility</Card.Title>
                <Card.Text>
                  Easily find and filter flights that suit your different requirements, like no cancellation fees.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://knockknockgiveasock.org/wp-content/uploads/2016/07/icon_2171.png" style={{ height: '25vh' }} />
              <Card.Body>
                <Card.Title>Trusted and free</Card.Title>
                <Card.Text>
                  We are completely free to use - no hidden charges or fees.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://www.travel-monkey.com/wp-content/uploads/2016/11/Trip-Planner-Tools-1200x554.jpg" style={{ height: '25vh' }} />
              <Card.Body>
                <Card.Title>Easy to use trip planning tools</Card.Title>
                <Card.Text>
                  With useful tools like trip planner, flight tracker and bag measure, KAYAK is more than just a flight search site - it is your complete travel partner.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>

      {/* Places Section */}
      <div id="feature" className="py-5">
        <div className="text-center text-dark">
          <Slide left>
            <h1>Dream Your Next Trip</h1>
          </Slide>

          <Slide right>
            <p className="mb-0">
              We think you'd enjoy these places for a quick trip out of town.
            </p>
          </Slide>
        </div>

        <Container>
          {places.length === 0 ? <h6 className="text-center"><Spinner animation="border" /></h6> :
            <div className="my-3 d-flex flex-wrap justify-content-between">
              <Row>
                {places.slice(0, 6)?.map((place) => (
                  <Place key={place.key} place={place} />
                ))}
              </Row>
            </div>
          }
        </Container>
      </div>

      <div className="py-5" style={{ backgroundColor: 'rgba(240,246,255)' }}>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h5 className="text-dark" mt-5>Subscribe and get 20% off</h5>
              <p className="text-muted">Join our newsletter and discover new destinations to inspire your next journey. Plus, get 20% off at our online shop. Every week you'll receive expert advice, tips, the latest updates in travel news and much more.</p>
            </Col>
            <Col xs={12} md={6}>
              <Form>
                <Col sm>
                  <Form.Group
                    className="mb-3 text-dark"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Your Email </Form.Label>
                    <Form.Control
                      style={formStyle}
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </Form.Group>
                </Col>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
