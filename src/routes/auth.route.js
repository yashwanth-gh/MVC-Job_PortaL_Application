import express from 'express';
import AuthController from '../controllers/auth.controller.js';
import { authValidation } from '../middlewares/authValidation.middleware.js';

const router = express.Router();
const authController = new AuthController()

//* -- Get routes
router.route("/signup").get(authController.getSignUp);
router.route("/signin").get(authController.getSignIn);

//* -- Post routes
router.route("/signup").post(authValidation,authController.postSignUp);
router.route("/signin").post(authValidation,authController.postSignIn);

export default router;