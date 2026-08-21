import { Router } from "express";
import { getUserData, login, signup } from "../controller/user.js";
import isAuth, { ensureAuthenticated } from "../middleware/auth.js";

const router = Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/me', ensureAuthenticated, getUserData);

export default router;