

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51Lx9WMAo7P1BBl8Yuv6AeP03Nesg90j9O0Ufkm2L3h8Pe8ECdl4p2aeI8agi6gztDiSzVQYmF9BL3xDemdHMNQVh008nnPv1Fy')
//To set up an API

// App config
const app = express()
//Middleware
app.use(cors({origin: true}));
app.use(express.json());
//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "gbp",
    });
    // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

  
//Listen command
exports.api = functions.https.onRequest(app);
// firebase emulators:start 
// Example endpoint
// (http://127.0.0.1:5001/e-comm-site-jozebel/us-central1/api)