
const loginUser = (req, res) => {
    res.send('Login')
 }

 const registerUser = (req, res) => {
    res.send('Register')
 }

 const getUsers = (req, res) => {
    res.send('Get users')
 }


module.exports = {
    getUsers,
    loginUser,
    registerUser
}