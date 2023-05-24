const pg = require("pg");

const DB_PASSWORD = process.env.DB_PASSWORD;

const pool = new pg.Pool({
  host: "db.bit.io",
  port: 5432,
  ssl: true,
  database: "avcopan/trial",
  user: "songs",
  password: DB_PASSWORD,
});


function getAllSongs() {
  return pool.query('SELECT * FROM "songs"')
    .then((result) => result.rows);
}

function addSong(song) {
  let query = `
    INSERT INTO "songs" ("rank", "artist", "track", "published")
    VALUES ($1, $2, $3, $4);
  `

  return pool.query(query, [song.rank, song.artist, song.track, song.published]);
}

module.exports = {
  getAllSongs,
  addSong
}