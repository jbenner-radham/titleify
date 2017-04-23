const expect = require('chai').expect;
const titleify = require('../lib');

describe('titleify', function () {
    it('capitalizes "hello!"', function () {
        expect(titleify('hello!')).to.equal('Hello!');
    });

    it('converts "hello world!" into titlecase', function () {
        expect(titleify('hello world!')).to.equal('Hello World!');
    });
});
