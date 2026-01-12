import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71Xh-krld-L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="132432343"
            title="Deep Work: Rules for Focused Success in a Distracted World"
            price={14.99}
            image="https://m.media-amazon.com/images/I/41W+SUER72L._SY344_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="6656266"
            title="Stand Mixer,3.2Qt Small Electric Food Mixer,6 Speeds Portable Lightweight Kitchen Mixer for Daily Use with Egg Whisk,Dough Hook,Flat Beater (Black)"
            price={69.99}
            image="https://m.media-amazon.com/images/I/61qfEw5vTIL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="5454353456"
            title="Samsung 32 inch Odyssey Neo G8 (G85NB) 4K UHD 240Hz 1ms G-Sync 1000R Curved Gaming Monitor, Quantum HDR2000, AMD FreeSync Premium Pro, Matte Display, DisplayPort, Black & White, LS32BG852NNXGO"
            price={849.99}
            image="https://m.media-amazon.com/images/I/71iCwL1AjNL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="0098766"
            title="Echo Dot (3rd Gen, 2018 relAmazon Echo Dot Max (newest model), Alexa speaker with room-filling sound and nearly 3x bass, Great for living rooms and medium-sized spaces, Includes Alexa+ Early Access, Graphiteease) - Smart speaker with Alexa - Charcoal"
            price={99.99}
            image="https://m.media-amazon.com/images/I/713I4BW4fBL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="45458766"
            title="2021 Apple 11-inch iPad Pro (Wi-Fi, 256GB) - Space Gray"
            price={503.05}
            image="https://m.media-amazon.com/images/I/71GxP7vwkhL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="9998766"
            title="Rachael Ray Cucina Nonstick Cookware Pots and Pans Set, 12 Piece, Lavender Purple"
            price={174.69}
            image="https://m.media-amazon.com/images/I/71DKtcRP1CL._AC_UL640_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
