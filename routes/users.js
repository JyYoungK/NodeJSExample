import express from "express";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];

//all routes in here are starting with /users
//displaying info
router.get("/", (req, res) => {
  res.send(users);
  console.log(users);
});

//Browser can only do get request, so you need a software like postman to do it
//Here is a good place to use requst to post
//writing info
router.post("/", (req, res) => {
  console.log("POST ROUTE REACHED");
  const user = req.body;
  users.push(user);
  res.send(`User with the name ${user.firstName} added to the database`);
});

export default router;
