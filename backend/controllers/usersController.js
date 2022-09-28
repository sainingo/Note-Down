

const getUsers = (req, res) => {
   res.send('Get users')
}

const postUser = (req, res) => {
    res.send('Post users')
 }


module.exports = {
    getUsers,
    postUser
}