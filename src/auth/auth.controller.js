const express = require('express');
const router = express.Router();
const authService = require('./auth.service');

// routes
router.post('/login', login);
router.post('/register', register);

module.exports = router;

function login(req, res, next) {
    authService.login(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    authService.register(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}