const express = require("express");
const db = require('./db.js');

const PORT = process.env.PORT || 8000;
const DB_PASSWORD = process.env.DB_PASSWORD;
const app = express();

app.use(express.static("server/public/"));
app.use(express.json());

app.get("/songs", (req, res) => {
  db.getAllSongs()
    .then((songs) => {
      res.status(200).send(songs);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.post('/songs', (req, res) => {
  db.addSong(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
});

app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});
