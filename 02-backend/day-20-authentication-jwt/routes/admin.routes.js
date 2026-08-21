import express from 'express';
import { getAllUsers } from '../controller/admin.js';
import { isAdmin } from '../middleware/admin.js';
import isAuth, { ensureAuthenticated } from '../middleware/auth.js';

const adminRouter = express();

adminRouter.get('/users', ensureAuthenticated, isAdmin, getAllUsers);

export default adminRouter;