const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const payload = { username, password }
    if (username && password) {
        const admin = await Admin(payload)
        if (admin?.id) {
            admin.save()
            res.json({ message: 'Admin created successfully' })
        }
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink
    const payload = { title, description, price, imageLink, published: true}
    if (title && description && price && imageLink) {
        const course = await Course(payload)
        if (course?.id) {
            res.send({ message: 'Course created successfully', courseId: course.id })
            course.save()
        }
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const listOfCourses = await Course.find({})
    if (!!listOfCourses.length) {
        res.send(listOfCourses)
    }
});

module.exports = router;