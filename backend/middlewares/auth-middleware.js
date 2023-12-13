import jwt from 'jsonwebtoken'
import User from "../models/user-model.js"
import asyncHandler from "express-async-handler"

const checkAuth = asyncHandler(async (req, res, next) => {
    const { jwt: token } = req.cookies

    if (token) {
        try {
            const decodedData = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decodedData.userId).select("-password")
            next()
        } catch (err) {
            res.status(401)
            throw new Error("Not authorized, token failed")
        }
    } else {
        res.status(401)
        throw new Error("Not authorized, token not found")
    }
})
export default checkAuth