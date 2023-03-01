import  express  from "express";
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';

const router = express.Router()

//routers
router.post('create-category', requireSignIn, isAdmin)

export default router