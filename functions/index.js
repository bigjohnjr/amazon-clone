const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51LtFqMCo32YULhuMin1ZPXWBMk8HMJ1OM0mqLBY7dMOv30C2R1Tkqkl3Rm55FvjukDs5d4IgKpqGQD7NppZ0VyXe00BKa5PsNw"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
  console.log("Secret", clientSecret);
});

// - Listen command
exports.api = functions.https.onRequest(app);
