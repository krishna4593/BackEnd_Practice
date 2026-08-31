import express from 'express';
import {createPost, getAllPosts} from '../controllers/postController.js';
import upload from '../config/multer.js';
const router = express.Router();


router.post("/create",upload.single("image"),createPost);
router.get("/getPosts", getAllPosts)
export default router