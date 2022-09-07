import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.howtogeek.com/wp-content/uploads/2021/05/amazon_hero_1200px.jpg"
          alt=""
        />

        <div className="home__row">
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row"><Product /></div>
      </div>
    </div>
  );
}

export default Home;
