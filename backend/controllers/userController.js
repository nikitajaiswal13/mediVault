exports.getAllUsers = (req , res) => {
    res.status(200).json({
        status : 'success',
        message : 'All users will be here',
    })
}


exports.getUser = (req , res) => {
    res.status(200).json({
        status : 'success',
        message : 'User will be here',
    })
}