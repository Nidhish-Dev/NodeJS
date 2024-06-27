const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleRedirect
} = require("../controllers/url.controller");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);
router.get("/:shortId", handleRedirect);

module.exports = router;
