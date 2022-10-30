const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LtFqMCo32YULhuMin1ZPXWBMk8HMJ1OM0mqLBY7dMOv30C2R1Tkqkl3Rm55FvjukDs5d4IgKpqGQD7NppZ0VyXe00BKa5PsNw"
);

// API

// App Config
const app = express();

// MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());


// - API routes

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "USD",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
