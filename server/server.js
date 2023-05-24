const express = require("express");
const pg = require("pg");

const PORT = process.env.PORT || 8000;
const DB_PASSWORD = process.env.DB_PASSWORD;
const app = express();
const pool = new pg.Pool({
  host: "db.bit.io",
  port: 5432,
  ssl: true,
  database: "avcopan/trial",
  user: "songs",
  password: DB_PASSWORD,
});

app.use(express.static("server/public/"));
app.use(express.json());

app.get("/songs", (req, res) => {
  pool.query('SELECT * FROM "songs"')
    .then((result) => {
      res.status(200).send(result.rows());
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

app.listen(PORT, () => {
  console.log("App is listening on port", PORT);
});
