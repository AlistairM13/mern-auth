import asyncHandler from 'express-async-handler'
import User from '../models/user-model.js'
import generateToken from "../utils/generate-token.js"

const getUsers = (req, res) => {
    res.json({ message: "get all" })
}

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(409)
        throw new Error("User already exists")
    }

    const user = await User.create({
        username, email, password
    })

    await generateToken(res, user._id)
    res.status(201).json({
        id: user._id,
        username: user.username,
        email: user.email
    })
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
        res.status(404)
        throw new Error("Invalid credentials")
    }

    const isPasswordMatching = await user.checkPassword(password)

    if (!isPasswordMatching) {
        res.status(404)
        throw new Error("Invalid password")
    }

    await generateToken(res, user._id)
    res.json({
        id: user._id,
        username: user.username,
        email: email
    })

})

const logout = (req, res) => {
    res.json({ message: "logout" })
}

const getUserProfile = (req, res) => {
    res.json({ message: "get user" })
}
const updateUserProfile = (req, res) => {
    res.json({ message: "update user" })
}
const deleteUser = (req, res) => {
    res.json({ message: "delete user" })
}

export {
    getUsers,
    registerUser,
    loginUser,
    logout,
    getUserProfile,
    updateUserProfile,
    deleteUser
}