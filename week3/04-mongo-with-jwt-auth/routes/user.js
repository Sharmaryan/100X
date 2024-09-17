const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
// will remove later
const SECRET_KEY = 'hey_secret'

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const payload = { username, password }
    try {
        await User.create(payload)
        res.json({ msg: ' User Created Successfully' })
    }
    catch (err) {
        res.json({ msg: 'Unable to create admin' })
    }
});

router.post('/signin', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const payload = { username, password }
    try {
        const user = await User.findOne(payload)
        if (user?.id) {
            const token = jwt.sign({ username }, SECRET_KEY)
            res.json({ token })
        }
        else
            throw err
    }
    catch (err) {
        console.log(err)
        res.json({ msg: 'user not found' })
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
    const username = res.locals.username.username
    User.updateOne({ username }, {
        "$push": {
            purchasedCourses: courseId
        }
    }).then((value) => console.log(value))
    res.json(({ message: 'Course purchase completed' }))
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = res.locals.username.username
    const user = await User.findOne({
        username
    })
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({ courses })
});

module.exports = router