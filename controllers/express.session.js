const usersService = require('../services/users.service.server')

module.exports = (app) => {
    const setSessionAttribute = (req, res) => {
        const attr = req.params['attr']
        const value = req.params['value']
        req.session[attr] = value
        res.send(value)
    }

    const getSessionAttribute = (req, res) => {
        const attr = req.params['attr']
        const value = req.session[attr]
        res.send(value)
    }

    const invalidateSession = (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    //createUser
    const register = (req, res) => {
        const newUser = req.body;
        usersService.createUser(newUser)
            .then(actualUser => {
                req.session['profile'] = actualUser
                res.send(actualUser)
            })
    }

    const login = (req, res) => {
        const email = req.body.email
        const password = req.body.password
        usersService.findUserByCredentials(email,password)
            .then(status => {
                const currentUser = status
                if (status.length < 1 || status == undefined) {
                    res.json({
                        success:false,
                        msg:"user not found"
                    })
                    return;
                } else {
                    req.session['profile'] = currentUser
                    res.json({
                        success:true,
                        userId:currentUser._id,
                        userInfo:currentUser,
                        msg:"user login success"
                    })
                    return;
                }
            })
    }

    const profile = (req, res) => {
        const user = req.session['profile']
        if (user){
            res.send(user)
        } else {
            res.sendStatus(404)
        }
    }

    const logout = (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    app.get("/api/session/set/:attr/:value", setSessionAttribute)
    app.get("/api/session/get/:attr", getSessionAttribute)
    app.get("/api/session/kill", invalidateSession)
    app.post("/api/users", register)
    app.post("/api/login", login)
    app.post("/api/profile", profile)
    app.post("/api/logout", logout)
}
