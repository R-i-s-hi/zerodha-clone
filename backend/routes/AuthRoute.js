const { Signup, Login, Logout } = require("../controllers/AuthController");
const {userVerification} = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/verify-user',userVerification);
router.post("/logout", Logout);

module.exports = router;