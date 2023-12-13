import express from 'express'
import {
    getUserProfile,
    getUsers,
    loginUser,
    logout,
    registerUser,
    updateUserProfile,
    deleteUser
} from '../controllers/user-controller.js'
import checkAuth from "../middlewares/auth-middleware.js"

const router = express.Router()

router.route("/")
    .get(checkAuth, getUsers)
    .post(registerUser)
    
router.route("/:userId")
    .get(getUserProfile)
    .patch(updateUserProfile)
    .delete(deleteUser)

router.post("/login", loginUser)

router.post("/logout", logout)



export default router