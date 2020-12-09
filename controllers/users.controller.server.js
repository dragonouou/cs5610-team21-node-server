const usersService = require('../services/users.service.server')

module.exports = (app) => {

    const findAllUsers = (req, res) =>
        usersService.findAllUsers()
            .then(users => res.json(users))

    const findAllUsersDetails = (req, res) =>
        usersService.findAllUsersDetails()
            .then(users => res.json(users))

    const findUserById = (req, res) =>
        usersService.findUserById(req.params.uid)
            .then(user => res.json(user))

    const findUserByIdDetails = (req, res) =>
        usersService.findUserByIdDetails(req.params.uid)
            .then(user => res.json(user))

    // const createUser = (req, res) =>
    //     usersService.createUser(req.body)
    //         .then(actualUser => res.send(actualUser))

    const updateUser = (req, res) =>
        usersService.updateUser(req.params.uid, req.body)
            .then(status => res.send(status))

    app.get('/api/users/:uid', findUserById)
    app.get('/api/users/:uid/details', findUserByIdDetails)

    app.get('/api/users', findAllUsers)
    app.get('/api/users-details', findAllUsersDetails)

    // app.post('/api/users', createUser)
    app.put('/api/users/:uid', updateUser)
}
