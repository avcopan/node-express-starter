const express = require("express");

const PORT = 8000;
const app = express();

let users = [
  {
    name: "Anne",
    role: "admin",
  },
  {
    name: "Bob",
    role: "user",
  },
];

app.use(express.static("server/public/"));
app.use(express.json());

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.get("/users/:userIndex", (req, res) => {
  let userIndex = req.params.userIndex;
  console.log("Sending user:", users[userIndex]);
  res.status(200).send(users[userIndex]);
});

app.post("/users", (req, res) => {
  users.push(req.body);
  res.sendStatus(201);
});

app.put("/users/:userIndex", (req, res) => {
  let updatedUser = req.body;
  let userIndex = req.params.userIndex;
  users[userIndex] = updatedUser;
});

app.delete("/users/:userIndex", (req, res) => {
  let userIndex = req.params.userIndex;
  let deletedUser = users[userIndex];
  users[userIndex] = undefined;
  res.status(200).send(deletedUser);
});

app.listen(PORT, () => {});
