const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth')
const Event = require('../../models/Event');
const User = require('../../models/User');
// @route           POST api/posts
// @description     Create a Post
// @access          Private
router.post(
  '/',
  [auth,[
    check('name', 'Name is required').not().isEmpty(),
    check(
      'details',
      'Enter Details'
    ).not().isEmpty(),
    check('details',
    'Enter Details must not be greater than 300 ').isLength({max:300})
  ]],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // const user = await User.findById(req.user.id).select('-password');

      const newEvent = new Event({
        name: req.body.name,
        details: req.body.details,
        user: req.user.id,
      });

      const nevent = await newEvent.save();

      res.json(nevent);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route           GET api/posts
// @description     Get all Posts
// @access          Private

router.get('/', auth, async (req, res) => {
  try {
    const posts = await Event.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
