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
        res.send(200)
    }

    //createUser
    const register = (req, res) => {
        const newUser = req.body;
        usersService.createUser(newUser)
            .then(actualUser => {
                req.session['profile'] = actualUser
                res.send(actualUser)
            })
        //post, req.body
        // const username = req.params["username"]
        // const password = req.params["password"]
        // const newUser = {username, password}
        // users.push(newUser)
        // req.session['profile'] = newUser
        // res.send(user)
    }

    const login = (req, res) => {
        //req.body
        const username = req.params["username"]
        const password = req.params["password"]
        //findUserByCredentials
        const user = users.find(u => u.username === username && u.password === password)
        if (user) {
            req.session['profile']= user
            res.send(user)
        } else {
            res.send(403)
        }
    }
    const profile = (req, res) => {
        const user = req.session['profile']
        res.send(user)
    }
    const logout = (req, res) => {
        req.session.destroy()
        res.send(200)
    }

    app.get("/api/session/set/:attr/:value", setSessionAttribute)
    app.get("/api/session/get/:attr", getSessionAttribute)
    app.get("/api/session/kill", invalidateSession)
    app.post("/api/users", register)
    app.post("/api/login", login)
    app.post("/api/profile", profile)
    app.post("/api/logout", logout)
}
