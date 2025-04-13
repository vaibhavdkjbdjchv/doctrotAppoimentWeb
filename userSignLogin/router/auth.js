import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, email, password, dob } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ msg: 'Email already in use' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      dob
    });

    await newUser.save();
    res.status(201).json({ msg: 'Signup successful!' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error, oops!' });
  }
});

export default router;
