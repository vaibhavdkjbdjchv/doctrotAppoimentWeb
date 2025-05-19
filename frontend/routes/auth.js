import express from 'express';
import bcrypt from 'bcrypt';
import User  from '../models/User.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json());
// router.post('/signup', async (req, res) => {
//   const { username, email, password, dob } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(409).json({ msg: 'Email already in use' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//       dob
//     });

//     await newUser.save();
//     res.status(201).json({ msg: 'Signup successful!' });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: 'Server error, oops!' });
//   }
// });

app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});



export default router;
