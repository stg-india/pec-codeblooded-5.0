const express = require("express");
const verifyJWT= require("../middleware/verifyJWT")
const router = express.Router();
const {
  sendVerification,
  verifyMail,
  disconnectHandle,
  handleStatus
} = require("../controllers/contest/CFHandleController");

router.get("/verify/:token", verifyMail);
router.use(verifyJWT);
router.post("/verify", sendVerification);
router.get("/status", handleStatus);
router.post("/remove", disconnectHandle);

module.exports = router;
