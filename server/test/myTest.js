/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-spacing */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable key-spacing */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable comma-spacing */
/* eslint-disable indent */
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

chai.use(chaiHttp);
chai.should();

describe("before each", () => {
    beforeEach((done) => {
        done();
    })
})


describe("User tests", () => {
    it("User should be able to login", (done) => {
        chai.request(app).post("/api/v1/auth/signin").send({
            email: "admin@gmail.com",
            password: "Abaaba1"
        }).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.an("object");
            done();
        })
    });

    it("User should not be able to login when no email", (done) => {
        chai.request(app).post("/api/v1/auth/signin").send({
            email: "",
            password: "Abaaba1"
        }).end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.an("object");
            done();
        })
    });

    it("User should not be able to login when wrong password", (done) => {
        chai.request(app).post("/api/v1/auth/signin").send({
            email: "admin@gmail.com",
            password: "A"
        }).end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.an("object");
            done();
        })
    });


    it("User should not be able to login when wrong password and wrong email", (done) => {
        chai.request(app).post("/api/v1/auth/signin").send({
            email: "adminuu@gmail.com",
            password: "A"
        }).end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.an("object");
            done();
        })
    });

    it("Should not be able to login", (done) => {
        chai.request(app).post("/api/v1/auth/signin").send({
            email: "sdfsf@sfs",
            password: "sfgfgsfsf"
        })
            .end((err, res) => {
                res.should.has.status(404);
                done();
            });

    })

})