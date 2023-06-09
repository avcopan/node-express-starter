const express = require("express");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static("server/public/"));
app.use(express.json());

app.listen(PORT, () => {});
