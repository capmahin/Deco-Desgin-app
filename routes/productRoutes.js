import express from 'express'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';

const router = express.Router()

//routes
router.post('/create-product', requireSignIn, isAdmin)
export default router