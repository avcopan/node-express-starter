const express = require("express");
const userRouter = require("./routes/router.js");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static("server/public/"));
app.use(express.json());
app.use("/users", userRouter);

app.listen(PORT, () => {});
