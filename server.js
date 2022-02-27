require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const port = 7500;

const postsRouter = require("./Routes/posts-routes");
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  res.send({ msg: "server online" });
});

app.listen(port);
