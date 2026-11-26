const express = require("express");
const app = express();

function sayHello() {
    return "Hello world!!";
}

app.get("/hello", function (request, response) {
    response.send(sayHello());
});

app.server = app.listen(9000, function () {
    console.log("Listening on 9000");
});

module.exports = { app, sayHello };
