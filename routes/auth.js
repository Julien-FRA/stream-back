var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// http://localhost:3000/users/auth
router.post('/', async (req, res, next) => {
    const { username, password } = req.body;
    const user = await mongoose.model('User').findOne({
        username,
        password
    })

    if (user) {
        res.json({ token: user._id })
    } else {
        res.status(401)
        res.json({ message: "Login failed" });
    }
});

router.get('/test', async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const user = await mongoose.model('User').findById(token)
    if (user) {
        res.json({ message: "Login done" });
      } else {
        res.status(401);
        res.json({ message: "Login failed" });
      }
});

module.exports = router;