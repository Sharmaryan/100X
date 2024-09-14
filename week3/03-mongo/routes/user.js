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
        const admin = await User(payload)
        if (admin?.id) {
            admin.save()
            res.json({ message: 'User created successfully' })
        }
    }
});

router.get('/courses', userMiddleware, async (req, res) => {
    const listOfCourses = await Course.find({})
    if (!!listOfCourses.length) {
        res.send(listOfCourses)
    }
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router