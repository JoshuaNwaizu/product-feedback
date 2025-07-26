import express from 'express';
import {
  checkAuth,
  createAccount,
  getUserById,
  login,
  logout,
} from '../controllers/authController';

const router = express.Router();

router.route('/create-account').post(createAccount);
router.route('/login').post(login);
router.route('/user/:id').get(getUserById);
router.route('/checkAuth').get(checkAuth);
router.route('/logout').get(logout);

export default router;
