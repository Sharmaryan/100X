const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "Test@123";

mongoose.connect(
    'mongodb+srv://Sharmaryan:Aryan8630@nodeexpressprojects.02bwfcu.mongodb.net/',
);
const User = mongoose.model('Users', { name: String, email: String, password: String });


const app = express();
app.use(express.json())

function userExists(username, password) {
    // return ALL_USERS.find((user) => user.username === username && user.password === password)
}

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const existingUser = await User.findOne({ email: username })
    if (existingUser) {
        return res.status(400).send("User already exists")
    }
    const user = new User({ email: username, password, name })
    user.save()
    res.json(({ "msg": "User created successfully" }))
});



app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        const otherUsers = ALL_USERS.filter((user) => user.username !== username);
        res.status(200).send(otherUsers)
        return otherUsers
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000)