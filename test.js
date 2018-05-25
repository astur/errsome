const test = require('ava');
const m = require('.');

test('errsome', t => {
    t.is(typeof m, 'function');
});

test('main', t => {
    const err = new Error('TEST');
    err.field = 'bla';
    const mErr = m(err);
    t.is(Object.keys(mErr).length, 4);
    t.deepEqual(Object.keys(mErr), ['name', 'message', 'stack', 'field']);
    t.true(Array.isArray(mErr.stack));
    t.is(mErr.field, 'bla');
    t.is(mErr.message, 'TEST');
    t.is(mErr.name, 'Error');
});
