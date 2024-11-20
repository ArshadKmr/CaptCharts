import mongoose from "mongoose";
import User from "./userModel.js"

const postModel = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    }],
    comments: [{
        comment: { type: String },
        author: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    }]
})

export default mongoose.model('Post', postModel)