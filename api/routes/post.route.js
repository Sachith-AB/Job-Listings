import express from 'express';
import { createPost, deletePost, getpostForUser, getPosts } from '../controllers/post.controller.js';
import {updatePost} from '../controllers/post.controller.js'
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create-post',verifyToken,createPost);
router.put('/update-post/:postId/:userId',verifyToken,updatePost);
router.delete('/delete-post/:postId/:userId',verifyToken,deletePost);
router.get('/get-posts',getPosts);
router.get('/get-post/:userId',verifyToken,getpostForUser);

export default router;

