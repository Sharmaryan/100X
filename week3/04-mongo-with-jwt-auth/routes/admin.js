const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
// will remove later
const SECRET_KEY = 'hey_secret'

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const payload = { username, password }
    try {
        await Admin.create(payload)
        res.json({ msg: 'Admin Created Successfully' })
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
        const user = await Admin.findOne(payload)
        if (user?.id) {
            const token = jwt.sign({ username }, SECRET_KEY)
            res.json({ token })
        }
        else
            throw err
    }
    catch (err) {
        res.json({ msg: 'user not found' })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink
    const payload = { title, description, price, imageLink, published: true }
    if (title && description && price && imageLink) {
        const course = await Course.create(payload)
        if (course?.id) {
            res.send({ message: 'Course created successfully', courseId: course.id })
        }
    }

});

router.get('/courses', adminMiddleware, async (_, res) => {
    const listOfCourses = await Course.find({})
    if (!!listOfCourses.length) {
        res.send(listOfCourses)
    }
});

module.exports = router;