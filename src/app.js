const express = require("express");
const connectDB = require("./config/db.js");

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server on port ${port}\n💜 http://localhost:${port}`);
});
