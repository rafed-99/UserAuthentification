const router = require('express').Router();
const authController = require('../controllers/authController')

router.get("/signup",authController.SignupGet);
router.get("/login",authController.LoginGet);
router.post("/signup",authController.SignupPost)
router.post("/login",authController.LoginPost);

module.exports = router;