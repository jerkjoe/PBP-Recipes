const express = require('express');

const router = express.Router();

const { check, validationResult } = require('express-validator');

const User = require('../../models/Users');

const gravatar = require('gravatar');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')

const config = require('config')
//@route GET api/user

// router.get('/', (req, res) => {
//     res.send('User route')
// })

router.post(
    '/',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please enter a valid email address').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const { email, name, password, avatar } = req.body;

        try {
            /**
             * see if user exists
             * get users gravatar
             * encrypt password
             * return json web token
             */

            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({
                    errors: [
                        {
                            msg: 'User already exists'
                        }
                    ]
                });
            }

            // 2
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });

            user = new User({
                name,
                email,
                password,
                avatar
            });

            const salt = await bcrypt.genSalt(10)
            
            user.password = await bcrypt.hash(password, salt)
            await user.save()
            
            const payload = {
                user: {
                    id: user.id
                }
            }
            
            jwt.sign(payload, config.get('jwtToken'), {
                expiresIn: 360000
            }, (err, token) => {
                if(err) {
                    throw err
                } 
                res.json({
                    token
                })
            })
            
            
            // res.send('User Registered');
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;
