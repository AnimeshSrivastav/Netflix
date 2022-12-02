const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

app.use(express.json());
dotenv.config();

mongoose.connect("mongodb+srv://animesh:animesh@cluster0.ykawrxl.mongodb.net/Netfliy?retryWrites=true&w=majority",()=>{
  console.log("Connected to DB");
})


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8080, () => {
  console.log("backend end server is running");
});
