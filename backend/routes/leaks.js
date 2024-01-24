const { fetchLeaks, createLeak } = require("../controllers/leak_controller");
const { isAuthorized } = require("../middleware/verifyToken");
const Leaks = require("../models/Leaks");

const router = require("express").Router();

router.get("/", fetchLeaks);
router.post("/", isAuthorized, createLeak);

module.exports = router;
