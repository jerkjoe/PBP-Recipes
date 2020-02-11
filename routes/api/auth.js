const express = require('express');

const router = express.Router();

const auth = require('../../middleWare/auth');

const User = require('../../models/Users');

const { check, validationResult } = require('express-validator');

const jwt = require('jsonwebtoken');

const config = require('config');

const bcrypt = require('bcryptjs');

//@route GET api/user
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post(
    '/',
    [
        check('email', 'Please enter a valid email address').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const { email, password } = req.body;

        try {
            /**
             * see if user exists
             * get users gravatar
             * encrypt password
             * return json web token
             */

            let user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({
                    errors: [
                        {
                            msg: 'Invalid credentials'
                        }
                    ]
                });
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch) {
                return res.status(400).json({
                    errors:[{
                        msg: 'Invalid credentials'
                    }]
                })
            }
            
            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtToken'),
                {
                    expiresIn: 360000
                },
                (err, token) => {
                    if (err) {
                        throw err;
                    }
                    res.json({
                        token
                    });
                }
            );

            // res.send('User Registered');
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);


module.exports = router;
