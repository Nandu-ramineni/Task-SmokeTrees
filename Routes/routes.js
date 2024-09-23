import express from 'express';
import { addUserAndAddress } from '../Controllers/userController.js';

const router = express.Router();

router.post('/register', addUserAndAddress);

export default router;
