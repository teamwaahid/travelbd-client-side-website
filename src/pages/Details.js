import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "./../hooks/useAuth.js";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import Spinner from 'react-bootstrap/Spinner'

const Details = () => {
  const history = useHistory();
  const [place, setPlace] = useState({});
  const { id } = useParams();
  const { addToCart, AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid, displayName, photoURL, email } = user;

  useEffect(() => {
    fetch(`https://dark-fangs-43312.herokuapp.com/places/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?._id) {
          setPlace(data);
        } else {
          alert("something went wrong!");
        }
      });
  }, [id]);

  return (
    <div>
      < div className="my-4">
        {place?.title ? (
          <Container>
            <Row className="d-flex justify-content-center ">
              <Col md={6}>
                <img className="img-fluid" src={place.img} alt="" /><br />

                {/* User Detail's */}
                <h1 className="text-center mt-4">User Detail</h1>
                <Container className="my-2">
                  <Row>
                    <Col>
                      <div className="align-items-center d-flex flex-column">
                        <img
                          width="220px"
                          className="rounded-circle"
                          src={photoURL}
                          alt=""
                        />
                        <h6 className='mt-3'>Full name</h6>
                        <h4>{displayName}</h4>
                        <h6>Email Address</h6>
                        <h4>{email}</h4>
                        <button className="btn mt-3 btn-primary">Edit Profile</button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col md={6} className="d-flex justify-content-center flex-column">
                <h2>{place.name}</h2>
                <h5>{place.title}</h5>
                <p>{place.description}</p>
                <Row>
                  <Col>
                    <h1>Price:{place.price}$</h1>
                    <div className="my-2">
                      <Rating
                        initialRating={place.rating}
                        readonly
                        emptySymbol={
                          <FontAwesomeIcon
                            className="text-warning"
                            icon={emptyStar}
                          />
                        }
                        fullSymbol={
                          <FontAwesomeIcon
                            className="text-warning"
                            icon={fullStar}
                          />
                        }
                      />
                      <span> {place.rating}</span><br />
                      <button
                        onClick={() => {
                          if (uid) {
                            addToCart(place);
                          } else {
                            history.push("/login");
                          }
                        }}
                        className="btn btn-primary  w-100 mt-3"
                      >
                        Buy Now
                      </button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        ) : (
          <div className="my-5 py-1">

            {/* <h1 className="my-5 p-5 text-center">NO place Found</h1> */}
            <h6 className="text-center"><Spinner animation="border" /></h6>

          </div>
        )}
      </div>

    </div >
  );
};

export default Details;
