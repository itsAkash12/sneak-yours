const logoutUser = (req, res)=> {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });
        res.status(200).json({
            message:"success",
            message: "Logged Out successfully",
        });
    } catch (error) {
        res.status(200).json({
            success: true,
            message: error.message,
        });
    }
}

module.exports = logoutUser;