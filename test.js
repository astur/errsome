const test = require('ava');
const m = require('.');

test('errsome', t => {
    t.true(true);
    t.is(m, m);
});
