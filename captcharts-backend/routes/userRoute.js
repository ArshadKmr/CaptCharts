import express from 'express';
import { insertUser, loginUser, insertPost, getPost, likePost, commentPost, } from '../controller/userController.js';
import userAuthenticateToken from '../middleware/userMiddleware.js';

const userRoute = express()

userRoute.post('/register', insertUser)
userRoute.post('/login', loginUser)
userRoute.post('/post', userAuthenticateToken, insertPost)
userRoute.get('/post', userAuthenticateToken, getPost)
userRoute.patch('/post', userAuthenticateToken, likePost)
userRoute.put('/post', userAuthenticateToken, commentPost)

export default userRoute