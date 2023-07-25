const request = require("supertest");
const app = require("../app");

/**
 *  End-to-end test- Nothing mocked, calls through!
 */

describe("GET /", () => {

    it("should return foobar response", async () => {

        return request(app)
            .get('/')
            .expect(200, {
                foo: 'bar'
            });

    });

});