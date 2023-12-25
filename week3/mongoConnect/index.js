const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sharmaryan:Aryan%408630@nodeexpressprojects.02bwfcu.mongodb.net/userapp');

const User = mongoose.model("User", {
    name: String,
    password: String,
    email: String,
});

const app = express();
app.use(express.json());
app.post('/signup', async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const userExists = await User.findOne({ email: username})
    if(userExists){
        res.status(400).send("User already exists")
    }

    const user = new User({name, email:username, password})
    user.save();
    res.json({'msg':'user created successfully'})
})



// function userExists(username, password) {
//   // should check in the database
// }

// app.post("/signin", async function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, "shhhhh");
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username from the database
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

app.listen(3000);