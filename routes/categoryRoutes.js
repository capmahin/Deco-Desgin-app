import  express  from "express";
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { createCategoryController, updateCategoryController } from './../controllers/categoryController.js';

const router = express.Router()

//routers
//create category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

//update category
router.put('/update-category/:id', requireSignIn,isAdmin, updateCategoryController);

//getAll category
router.get('/category', categoryController)

export default router