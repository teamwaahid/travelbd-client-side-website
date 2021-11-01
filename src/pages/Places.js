import { Container, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth.js";
import Slide from "react-reveal/Slide";
import Place from "../components/place/Place.js";
import Spinner from 'react-bootstrap/Spinner';

const Places = () => {
  const { places, totalPage, currentPage, setCurrentPage } = useAuth();

  function pageHandler(number) {
    setCurrentPage(number);
  }

  return (
    <div className="py-5">
      <div className="text-center text-dark">
        <Slide left>
          <h1> Destinations</h1>
        </Slide>

        <Slide right>
          <p className="mb-0">
            Here you can find all your destinations.
          </p>
        </Slide>
      </div>

      <Container>
        {places.length === 0 ? <h6 className="text-center"><Spinner animation="border" /></h6> :
          <div className="my-3 d-flex flex-wrap justify-content-between ">
            <Row>
              {places.map((place) => (
                <Place key={place._id} place={place} />
              ))}
            </Row>
          </div>
        }
        <div className="d-flex justify-content-center">
          {[...Array(totalPage).keys()].map((number) => (
            <button
              onClick={() => pageHandler(number)}
              key={number}
              className={
                number === currentPage
                  ? "btn btn-primary rounded-0 border"
                  : "btn bg-dark text-white rounded-0 border"
              }
            >
              {number + 1}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Places;
