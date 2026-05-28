const axios = require("axios");

const Profile = require("../models/Profile");

const calculateStats = require("../utils/calculateStats");


// analyze github profile
const analyzeProfile = async (req, res) => {

    try {

        const username = req.params.username;

        // fetch github user
        const userResponse = await axios.get(
            `https://api.github.com/users/${username}`,
            {
                headers: {
                    Authorization: `token ${process.env.GITHUB_TOKEN}`
                }
            }
        );

        // fetch repositories
        const repoResponse = await axios.get(
            `https://api.github.com/users/${username}/repos`,
            {
                headers: {
                    Authorization: `token ${process.env.GITHUB_TOKEN}`
                }
            }
        );

        const user = userResponse.data;

        const repos = repoResponse.data;

        const stats = calculateStats(repos);

        // save or update profile
        const profile = await Profile.findOneAndUpdate(

            { username: user.login },

            {
                username: user.login,
                name: user.name,
                bio: user.bio,
                followers: user.followers,
                following: user.following,
                publicRepos: user.public_repos,
                profileUrl: user.html_url,
                avatarUrl: user.avatar_url,
                location: user.location,
                company: user.company,

                totalStars: stats.totalStars,
                totalForks: stats.totalForks,
                mostUsedLanguage: stats.mostUsedLanguage,

                accountCreatedAt: user.created_at
            },

            {
                new: true,
                upsert: true
            }
        );

        res.status(200).json({
            message: "Profile analyzed successfully",
            data: profile
        });

    } catch (error) {

    if(error.response && error.response.status === 404){

        return res.status(404).json({
            message: "GitHub user not found"
        });
    }

    res.status(500).json({
        message: "Something went wrong"
    });
}
};


// get all profiles
const getProfiles = async (req, res) => {

    try {

        const profiles = await Profile.find();

        res.status(200).json(profiles);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching profiles"
        });
    }
};


// get single profile
const getSingleProfile = async (req, res) => {

    try {

        const profile = await Profile.findOne({
            username: req.params.username
        });

        if(!profile){

            return res.status(404).json({
                message: "Profile not found"
            });
        }

        res.status(200).json(profile);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching profile"
        });
    }
};

// search profile
const searchProfiles = async (req, res) => {

    try {

        const keyword = req.query.username;

        const profiles = await Profile.find({
            username: {
                $regex: keyword,
                $options: "i"
            }
        });

        res.status(200).json(profiles);

    } catch (error) {

        res.status(500).json({
            message: "Error searching profiles"
        });
    }
};

module.exports = {
    analyzeProfile,
    getProfiles,
    getSingleProfile,
    searchProfiles
};