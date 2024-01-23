const express = require("express");

const { User } = require('../models/UserModel')

const router = express.Router();

// Get all the users from the DB
/**
 * [
 *  {
 *      userID:
 *      username:
 *  },
 *  {
 *      userID:
 *      username:
 *  },
 *  {
 *      userID:
 *      username:
 *  },
 * ]
 */
router.get("/", async (request, response) => {
    let result = await User.find();
    response.json(result)
});

// Get a user by ID from the DB
// localhost:3000/users/32323232
/**
 *  {
 *      userID:
 *      username:
 *  }
 */
router.get("/:id", async (request, response) => {
    return null
});

// Create a new user in the DB
// localhost:3000/users/signup
// request.body = {username: "admin", passwprd: "password1"}
// respond with {jwt: wewe32e23e2rf424r223r3fesf}
router.post("/signup", async (request, response) => {
    
    let newUser = await User.create(request.body).catch(error => error);
    response.json(newUser);

});

// Log in the user
// localhost:3000/users/login
// request.body = {username: "admin", passwprd: "password1"}
// respond with {jwt: wewe32e23e2rf424r223r3fesf}
router.post("/login", async (request, response) => {
    return null
});

// localhost:3000/users/verify
// JWT in request.headers["jwt"] or request.headers["authoization"]
// respond with {jwt: wewe32e23e2rf424r223r3fesf}
router.get("/verify", async (request, response) => {
    return null;
});

// JWT in request.headers["jwt"] or request.headers["authoization"]
// respond with {jwt: wewe32e23e2rf424r223r3fesf}
router.get("/regenerate", async (request, response) => {
    return null;
});

module.exports = router