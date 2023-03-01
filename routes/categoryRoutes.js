import  express  from "express";
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { createCategoryController, updateCategoryController,categoryController, singleCategoryController } from './../controllers/categoryController.js';

const router = express.Router()

//routers
//create category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

//update category
router.put('/update-category/:id', requireSignIn,isAdmin, updateCategoryController);

//getAll category
router.get('/get-category', categoryController);

//single category
router.get('/single-category', singleCategoryController);

export default router