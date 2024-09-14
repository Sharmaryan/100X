const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

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
    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router