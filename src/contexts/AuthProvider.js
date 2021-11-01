import { createContext } from "react";
import useCart from "../hooks/useCart.js";
import useFirebase from "../hooks/useFirebase.js";
import usePlaces from "../hooks/usePlaces.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // hooks
  const AllContexts = useFirebase();
  const { places, totalPage, currentPage, setCurrentPage } = usePlaces();
  const { addToCart, selectedPlace, remove, setSelectedPlace } = useCart();

  const data = {
    currentPage,
    setCurrentPage,
    AllContexts,
    totalPage,
    places,
    addToCart,
    selectedPlace,
    remove,
    setSelectedPlace,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
