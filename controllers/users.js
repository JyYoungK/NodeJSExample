import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  console.log(`Users in the database: ${users}`);

  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });

  res.send(`User ${user.firstName} added to the database.`);
};

// to make this only accept id is to
// => req.params { id:2 }
export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  console.log(`user with id ${req.params.id} has been deleted`);

  const { id } = req.params;
  users = users.filter((user) => user.id !== req.params.id);

  res.send(`User with the id ${id} was deleted from the database`);
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.username = req.body.username;
  user.age = req.body.age;

  console.log(
    `username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`
  );
};
