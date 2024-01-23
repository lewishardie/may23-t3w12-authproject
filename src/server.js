const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message: "Hello World"
    })
});
const userRouter = require('./controllers/UserController');
app.use("/users", userRouter);

module.exports = {
    app
}
