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
          <Product
            id="132432343"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={3}
          />
          <Product
            id="6656266"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/81BOGWDXGHL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="5454353456"
            title="Odyssey Neo G9 G95NA Gaming Monitor, 4K UHD Mini LED Display, Curved Screen, 240Hz"
            price={599.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81jn2-rGnMS._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="0098766"
            title="Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal"
            price={39.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/6182S7MYC2L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="45458766"
            title="2021 Apple 11-inch iPad Pro (Wi-Fi, 256GB) - Space Gray"
            price={829.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81Y5WuARqpS._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="9998766"
            title="Rachael Ray Cucina Nonstick Cookware Pots and Pans Set, 12 Piece, Lavender"
            price={169.99}
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/817kh7Q7VoL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
