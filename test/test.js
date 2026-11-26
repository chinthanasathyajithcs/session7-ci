const chai = require("chai");
const chaiHttp = require("chai-http");
const { app, sayHello } = require("../server");

chai.use(chaiHttp);

suite("Tests", function () {
    // Unit test: the function on its own
    test("sayHello returns greeting", function () {
        chai.assert.equal(sayHello(), "Hello world!!");
    });

    // Integration test: the HTTP route
    test("GET /hello returns 200", function (done) {
        chai.request(app).get("/hello").end(function (error, response) {
            chai.assert.equal(response.status, 200);
            done();
        });
    });
});
