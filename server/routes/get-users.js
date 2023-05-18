const users = require("../data/users.js");

function getUser(userIndex) {
  return users[userIndex];
}

function getUserHandler(req, res) {
  // calls res.send and getUser
  let user = getUser(req.params.userIndex);
  console.log('In getUserHandler')
  console.log("Sending user:", user);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ message: "That's not a thing" });
  }
}

module.exports = {
  getUserHandler,
};
