const express = require("express");

const router = express.Router();

const {
    analyzeProfile,
    getProfiles,
    getSingleProfile,
    searchProfiles
} = require("../controllers/githubController");

router.post("/analyze/:username", analyzeProfile);

router.get("/profiles", getProfiles);

router.get("/search", searchProfiles);

router.get("/profiles/:username", getSingleProfile);

module.exports = router;