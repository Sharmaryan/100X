const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const payload = { username, password }
    if (username && password) {
        const admin = await User.create(payload)
        if (admin?.id) {
            res.json({ message: 'User created successfully' })
        }
    }
});

router.get('/courses', async (_, res) => {
    const listOfCourses = await Course.find({})
    if (!!listOfCourses.length) {
        res.send(listOfCourses)
    }
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const courseId = req.params.courseId
    const username = req.headers.username
    User.updateOne({ username }, {
        "$push": {
            purchasedCourses: courseId
        }
    }).then((value) => console.log(value))
    res.json(({ message: 'Course purchase completed' }))
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    })
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({ courses})
});

module.exports = router