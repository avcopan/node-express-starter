const express = require("express");
const users = require("../data/users.js");
const { getUserHandler } = require("./get-users.js");

// routers are like app, but you can have multiple
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(200).send(users);
});

userRouter.get("/:userIndex", getUserHandler );

userRouter.post("/", (req, res) => {
  users.push(req.body);
  res.sendStatus(201);
});

userRouter.put("/:userIndex", (req, res) => {
  let updatedUser = req.body;
  let userIndex = req.params.userIndex;
  users[userIndex] = updatedUser;
});

userRouter.delete("/:userIndex", (req, res) => {
  let userIndex = req.params.userIndex;
  let deletedUser = users[userIndex];
  users[userIndex] = undefined;
  res.status(200).send(deletedUser);
});

module.exports = userRouter;
