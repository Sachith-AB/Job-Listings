import express from 'express';
import { createPost, deletePost, getPosts } from '../controllers/post.controller.js';
import {updatePost} from '../controllers/post.controller.js'

const router = express.Router();

router.post('/create-post',createPost);
router.put('/update-post/:postId',updatePost);
router.delete('/delete-post/:postId',deletePost);
router.get('/getposts',getPosts);


export default router;
