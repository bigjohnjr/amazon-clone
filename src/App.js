import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LtFqMCo32YULhuMxVxlhsyqLAM9J3WHeCAyIh2C674YPlT3EdP5oQ8PcN0sx9p3tTyXtYVbPWaUGY3WrElVCi4b00If1YFQL5"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app componenet loads...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  // BEM
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/orders"
              element={
                <>
                  <Header />
                  <Orders />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route
              path="/payment"
              element={
                <>
                  <Header />
                  <Elements children={<Payment />} stripe={promise}></Elements>
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
