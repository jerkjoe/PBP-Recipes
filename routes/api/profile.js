const express = require('express');

const router = express.Router();

const auth = require('../../middleWare/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/Users');

const { check, validationResult } = require('express-validator');
// const jwt = require('jsonwebtoken');
const config = require('config');

const request = require('request');
//@route GET api/profile/me
// get current user's profile
// private

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res
                .status(400)
                .json({ msg: 'There is no profile for this user' });
        }
        res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('server error');
    }
});

router.post(
    '/',
    [
        auth,
        [
            check('status', 'Status is required')
                .not()
                .isEmpty(),
            check('skills', 'Skills is required')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            company,
            website,
            location,
            bio,
            status,
            githubusername,
            skills,
            youtube,
            facebook,
            twitter,
            linkedin,
            instagram
        } = req.body;

        const profileField = {};
        profileField.user = req.user.id;
        if (company) {
            profileField.company = company;
        }
        if (website) {
            profileField.website = website;
        }
        if (location) {
            profileField.location = location;
        }
        if (bio) {
            profileField.bio = bio;
        }
        if (status) {
            profileField.status = status;
        }
        if (githubusername) {
            profileField.githubusername = githubusername;
        }
        if (skills) {
            profileField.skills = skills.split(',').map(skill => skill.trim());
        }

        profileField.social = {};
        if (youtube) profileField.social.youtube = youtube;
        if (facebook) profileField.social.facebook = facebook;
        if (twitter) profileField.social.twitter = twitter;
        if (linkedin) profileField.social.linkedin = linkedin;
        if (instagram) profileField.social.instagram = instagram;

        try {
            let profile = await Profile.findOne({ user: req.user.id });
            if (profile) {
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileField },
                    { new: true }
                );
                return res.json(profile);
            }

            profile = new Profile(profileField);
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            return res.status.send('server error');
        }

        // res.send('Hello');
    }
);

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', [
            'name',
            'avatar'
        ]);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.user_id
        }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({
                msg: 'Profile not founds'
            });
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({
                msg: 'Profile not found'
            });
        }
        res.status(500).send('Server Error');
    }
});

router.delete('/', auth, async (req, res) => {
    try {
        // Todo remove users posts
        await Profile.findOneAndRemove({ user: req.user.id });

        await User.findOneAndRemove({ _id: req.user.id });

        res.json({
            msg: 'user removed'
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put(
    '/experience',
    [
        auth,
        [
            check('title', 'title is required')
                .not()
                .isEmpty(),
            check('company', 'company is required')
                .not()
                .isEmpty(),
            check('from', 'from is required')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            title,
            company,
            from,
            location,
            to,
            current,
            description
        } = req.body;

        const newExp = {
            title,
            company,
            from,
            location,
            to,
            current,
            description
        };

        try {
            const profile = await Profile.findOne({ user: req.user.id });
            console.log(profile);
            profile.experience.unshift(newExp);

            await profile.save();

            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

router.delete('/experience/:exp_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });

        const removeIndex = profile.experience
            .map(item => item.id)
            .indexOf(req.params.exp_id);

        profile.experience.splice(removeIndex, 1);
        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put(
    '/education',
    [
        auth,
        [
            check('school', 'school is required')
                .not()
                .isEmpty(),
            check('degree', 'degree is required')
                .not()
                .isEmpty(),
            check('fieldofstudy', 'fieldofstudy is required')
                .not()
                .isEmpty(),
            check('from', 'from is required')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            school,
            degree,
            fieldofstudy,
            from,
            location,
            to,
            current,
            description
        } = req.body;

        const newEdu = {
            school,
            degree,
            fieldofstudy,
            from,
            location,
            to,
            current,
            description
        };

        try {
            const profile = await Profile.findOne({ user: req.user.id });
            console.log(profile);
            profile.education.unshift(newEdu);

            await profile.save();

            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

router.delete('/education/:edu_id', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });

        const removeIndex = profile.education
            .map(item => item.id)
            .indexOf(req.params.edu_id);

        profile.education.splice(removeIndex, 1);
        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/github/:username', async (req, res) => {
    try {
        const options = {
            uri: `https://api.github.com/users/${
                req.params.username
            }/repos?per_page=5&sort=created:asc&client_id=${config.get(
                'githubClientId'
            )}&client_secret=${config.get('githubClientSecret')}`,
            method: 'GET',
            headers: {
                'user-agent': 'node.js'
            }
        };

        request(options, (error, response, body) => {
            if (error) console.error(error);

            if (response.statusCode !== 200) {
                return res.status(400).json({
                    msg: 'No Github profile found'
                });
            }
            res.json(JSON.parse(body));
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
