const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Register = require("./models/register");

const app = express();
const fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const dbURI =
  "mongodb+srv://rajpiyush278:18363779@cluster0.gaedcnp.mongodb.net/cluster2?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then((result) =>
    app.listen(3001, () => {
      console.log("server is listening");
    })
  )
  .catch((err) => console.log("some error occured", err));

app.post("/login", (req, res) => {
  const { email, password, account } = req.body;
  Register.findOne({ email })
    .then((user) => {
      if (user) {
        if (user.email === email) {
          if (user.password === password) {
            if (user.account === account) res.json("Login Successful");
            else res.json("Wrong account type");
          } else {
            if (user.account === account) res.json("incorrect Password");
            else res.json("Wrong account type and password");
          }
        }
      } else {
        res.json("Email not registered");
      }
    })
    .catch(() => res.json("Some error occured"));
});

