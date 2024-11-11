import { axiosInstanceUser } from "../config/baseURL";



export const register = async (name, email, password) => {
    try {
        const response = await axiosInstanceUser.post('/register', { name, email, password })
        return response
    } catch (error) {
        return error.response
    }
}

export const login = async (email, password) => {
    try {
        const response = await axiosInstanceUser.post('/login', { email, password })
        localStorage.setItem("captchartUser", JSON.stringify(response.data));
        return response
    } catch (error) {
        return error.response
    }
}

export const insertPost = async (post) => {
    try {
        const response = await axiosInstanceUser.post('/post',  post )
        return response
    } catch (error) {
        return error.response
    }
}

export const getPost = async () => {
    try {
        const response = await axiosInstanceUser.get('/post')
        return response
    } catch (error) {
        return error.response
    }
}

export const handleLike = async (id) => {
    try {
        const response = await axiosInstanceUser.patch('/post',{id})
        return response
    } catch (error) {
        return error.response
    }
}

export const handleComment = async (body) => {
    try {
        const response = await axiosInstanceUser.put(`/post`,body)
        return response
    } catch (error) {
        return error.response
    }
}

