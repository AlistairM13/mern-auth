import mongoose from 'mongoose';
import bcrpyt from 'bcrypt'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

userSchema.methods.checkPassword =  function (password) {
    return bcrpyt.compare(password, this.password)
}

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    const salt = await bcrpyt.genSalt(10)
    this.password = await bcrpyt.hash(this.password, salt)
    next()
})

const User = mongoose.model("User", userSchema)



export default User