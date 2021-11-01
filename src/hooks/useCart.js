import { useEffect, useState } from "react";
import useFirebase from "./useFirebase.js";

const useCart = () => {
  const { user } = useFirebase();
  const { uid, email } = user;
  const [selectedPlace, setSelectedPlace] = useState([]);

  useEffect(() => {
    fetch(`https://dark-fangs-43312.herokuapp.com/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setSelectedPlace(data);
        }
      });
  }, [uid]);

  function addToCart(place) {
    const isHave = selectedPlace.find(
      (selected) => selected._id === place._id
    );
    delete place._id;
    place.uid = uid;
    place.email = email;
    place.status = "pending";

    if (isHave) {
      alert("Place has been selected!");
    } else {
      fetch("https://dark-fangs-43312.herokuapp.com/place/add", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(place),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            const newSelection = [...selectedPlace, place];
            setSelectedPlace(newSelection);
          }
        });
    }
  }


  function remove(id) {
    const confirmation = window.confirm('Are you sure to Delete!!!')
    if (confirmation) {
      fetch(`https://dark-fangs-43312.herokuapp.com/delete/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const selectAfterRemove = selectedPlace.filter(
              (place) => place._id !== id
            );
            setSelectedPlace(selectAfterRemove);
          }
        });
    }
  }


  return { setSelectedPlace, remove, addToCart, selectedPlace };
};

export default useCart;
