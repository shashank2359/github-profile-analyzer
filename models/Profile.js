const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },

    name: String,

    bio: String,

    followers: Number,

    following: Number,

    publicRepos: Number,

    profileUrl: String,

    avatarUrl: String,

    location: String,

    company: String,

    totalStars: Number,

    totalForks: Number,

    mostUsedLanguage: String,

    accountCreatedAt: Date,

    analyzedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Profile", profileSchema);