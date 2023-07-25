
const mockData = {
    mockData: 'mock data!'
}

jest.doMock('../helper-functions/Foobar.js', () => jest.fn(() => mockData));

const request = require("supertest");
const app = require("../app");


/**
 *  Unit test- Mocked dependencies
 */

describe("GET /", () => {

    describe('base route returns foobar response', () => {


        it("with slash", async () => {

            await request(app)
                .get('/')
                .expect(200, mockData);

        });

        it("without slash", async () => {

            await request(app)
                .get('')
                .expect(200, mockData);

        });
    
    });

});