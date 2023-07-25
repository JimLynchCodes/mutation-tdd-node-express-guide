const Foobar = require('./FooBar');

describe('Foobar', () => {

    it("returns { foo: 'bar'}", () => {

        expect(Foobar()).toEqual({ foo: 'bar' })

    })

})