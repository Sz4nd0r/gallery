import { User } from '../models/user.model.js'

const resgisterUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields required" })
        }
        // check if user exists already
        const existing = await User.findOne({ email: email.toLowerCase() })
        if (existing) {
            return res.status(400).json({ message: "User already exists" })
        }
        // creating the user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            loggedIn: false
        })

        res.status(201).json({
            message: "User registered",
            user: { id: user._id, email: user.email, username: user.username }

        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        //check if the user already exists and find it
        const user = User.findOne({ email: email.toLowerCase() })

        if (!user) return res.status(400).json({ message: "User not found" })

        //compare password
        const isMatch = user.comparePassword(password)
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" })

        return res.status(201).json({
            message: "User logged in",
            user: { id: user._id, email: user.email, username: user.username }
        })
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message })
    }
}

const logoutUser = async (req, res) => {
    try {

        const { email } = req.body
        const user = await User.findOne({ email })

        if (!user) return res.status(404).json({ message: "User not found" })

        res.status(200).json({ message: "Logged out successfully" })

    } catch (error) {
        res.status(500).json({ message: "Inernal server errror", error: error.message })
    }
}

export {
    resgisterUser,
    loginUser,
    logoutUser
}