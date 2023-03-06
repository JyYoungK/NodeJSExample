import express from "express";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// let users = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 24,
//   },
// ];

//all routes in here are starting with /users
//displaying info
router.get("/", getUsers);

//Browser can only do get request, so you need a software like postman to do it
//Here is a good place to use requst to post
//writing info
//it's good to separate it like this like 'createUser' to make it look cleaner
router.post("/", createUser);

// to make this only accept id is to
// => req.params { id:2 }
router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
