import User from '../model/userModel.js'
import Post from '../model/postModel.js'
import bcrypt from 'bcrypt'
import generateToken from '../util/token.js'
import cloudinary from '../config/cloudinary.js'

export const insertUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            res.status(409).json({
                message: 'User already exists !!!'
            })
        } else {
            const salt = bcrypt.genSaltSync(10)
            const hashPassword = await bcrypt.hash(password, salt)
            if (hashPassword) {
                const newUser = await User.create({
                    name,
                    email,
                    password: hashPassword
                })
                if (newUser) {
                    const token = generateToken(newUser._id)
                    res.status(201).json({
                        token,
                        Id: newUser._id,
                        name: newUser.name,
                        email: newUser.email,
                        mobile: newUser.mobile,
                        isAdmin: newUser.isAdmin,
                        wallet: newUser.wallet
                    })
                } else {
                    res.status(400).json({
                        message: 'User creation failed'
                    })
                }
            }
        }
    } catch (error) {
        console.log(error.message)
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const userData = await User.findOne({ email })
        if (userData) {
            const compare = await bcrypt.compare(password, userData.password)
            if (compare) {
                const token = generateToken(userData._id)
                res.status(200).json({
                    token,
                    name: userData.name,
                    email: userData.email
                })
            } else {
                res.status(401).json({
                    message: 'Invalid password'
                })
            }
        } else {
            res.status(404).json({
                message: "User Not Found"
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

export const insertPost = async (req, res) => {
    try {
        const userId = req.user
        if (userId) {
            const { image, title } = req.body
            const resImage = await cloudinary.uploader.upload(image, {
                folder: "post",
            });
            if (!resImage) {
                res.status(404).json({
                    message: "Smething went wrong. Please try again later."
                })
            }
            const newPost = await Post.create({
                title,
                image: {
                    public_id: resImage.public_id,
                    url: resImage.secure_url
                },
                user: userId
            })
            if (!newPost) {
                res.status(400).json({
                    message: "Failed to create post"
                })
            } else {
                res.status(201).json({
                    message: "Post created successfully"
                })
            }
        } else {
            res.status(400).json({
                message: 'You have to be logged in..!!'
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

export const getPost = async (req, res) => {
    try {
        const userId = req.user
        if (userId) {
            const posts = await Post.find().sort({ createdAt: -1 }).populate("user", "-password").populate("likes", "-password").populate("comments.author", "-password");
            res.status(200).json({
                posts
            })
        } else {
            res.status(400).json({
                message: 'You have to be logged in..!!'
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

export const likePost = async (req, res) => {
    try {
        const userId = req.user
        if (userId) {
            const { id } = req.body
            const post = await Post.findOne({ _id: id })
            let updateQuery = null
            if (post?.likes?.includes(userId._id.toString())) {
                updateQuery = {
                    $pull: { likes: userId._id }
                }
            } else {
                updateQuery = { $addToSet: { likes: userId } }
            }
            const updatedPost = await Post.findByIdAndUpdate({ _id: id }, updateQuery)
            if (!updatedPost) {
                res.status(409).json({
                    message: "Could't like pose. Try again later"
                })
            }
            res.status(200).json({
                post
            })
        } else {
            res.status(400).json({
                message: 'You have to be logged in..!!'
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

export const commentPost = async (req, res) => {
    try {
        const userId = req.user
        if (userId) {
            const { id, commentData } = req.body
            const post = await Post.findOne({ _id: id })
            if (!post) {
                res.status(404).json({
                    message: "Post not found.Invalid post Id"
                })
            }
            const updatedPost = await Post.updateOne({ _id: id }, { $addToSet: { comments: { comment: commentData, author: userId._id } } })
            if (!updatedPost) {
                res.status(404).json({
                    message: "Could't comment pose. Try again later"
                })
            }
            res.status(200).json({
                message: "Comment posted successfully"
            })
        } else {
            res.status(400).json({
                message: 'You have to be logged in..!!'
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}