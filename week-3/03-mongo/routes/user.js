const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    let username=req.body.username
    let password=req.body.password

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    let respone=await courses.find({})
    res.json({
        courses:response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
    // Input: Headers: { 'username': 'username', 'password': 'password' }
    // Output: { message: 'Course purchased successfully' }
    

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router