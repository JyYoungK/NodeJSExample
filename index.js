import express from "express"; // part of the ES6 module system
//const express = require('express'); // comoonJS module system, which is older
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

//--bodyParser and Cors are both middleware

//body-parser is a middleware that is commonly used in Node.js web applications to parse incoming request bodies in a middleware before handling the request. It allows you to extract data from the request body and make it available in your server-side code.

app.use(bodyParser.json());

app.use("/users", usersRoutes);

//app.use(cors())
//CORS stands for Cross-Origin Resource Sharing. In Node.js, CORS is a mechanism that allows web applications running on one domain to access resources from another domain. It is a security feature that helps prevent unauthorized access to a server's resources from a different origin.

//Installing Nodemon in your Node.js project allows you to automatically restart the server whenever changes are made to your code, eliminating the need to manually restart the server each time you make updates.

//-dev what does this do? When we publish our application, no one is going to be running our server. So we are installing this dependency only for our own development purposes.

app.get("/", (req, res) => {
  //First route
  res.send("Hello from index.js");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
