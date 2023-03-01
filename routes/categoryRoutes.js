import  express  from "express";
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { createCategoryController } from './../controllers/categoryController.js';

const router = express.Router()

//routers
//create category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

//update category
router.put('/update-category', requireSignIn,isAdmin, updateCategoryController)

export default router