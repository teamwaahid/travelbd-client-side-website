import { useEffect, useState } from "react";

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const size = 9;
  useEffect(() => {
    fetch(
      `https://dark-fangs-43312.herokuapp.com/places?size=${size}&&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data.places);
        const totalData = data.count;
        const pages = Math.ceil(totalData / size);
        setTotalPage(pages);
      });
  }, [currentPage]);
  return { places, setPlaces, totalPage, currentPage, setCurrentPage };
};

export default usePlaces;
