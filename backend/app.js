// Hpz6Kggr7Me2Aag7
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router); 
mongoose
  .connect(
    "mongodb+srv://samridhi:Hpz6Kggr7Me2Aag7@cluster0.sik5juf.mongodb.net/trying?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
