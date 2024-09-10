const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "Test@123";

const app = express();
app.use(express.json())

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "aryan@gmail.com",
        password: "Test@123",
        name: "Aryan Sharma",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {
    return ALL_USERS.find((user) => user.username === username && user.password === password)
}

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
        // return a list of users other than this username
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000)