const test = require('ava');
const m = require('.');

test('errsome', t => {
    t.is(typeof m, 'function');
    t.is(typeof m.stringify, 'function');
    t.is(typeof m.log, 'function');
});

test('single line message', t => {
    const err = new Error('TEST');
    err.field = 'bla';
    const mErr = m(err);
    t.is(Object.keys(mErr).length, 4);
    t.deepEqual(Object.keys(mErr), ['name', 'message', 'stack', 'field']);
    t.true(Array.isArray(mErr.stack));
    t.false(/TEST/.test(mErr.stack[0]));
    t.is(mErr.field, 'bla');
    t.is(mErr.message, 'TEST');
    t.is(mErr.name, 'Error');
});

test('multi line message', t => {
    const err = new Error('TEST\nTEST\nTEST');
    err.field = 'bla';
    const mErr = m(err);
    t.is(Object.keys(mErr).length, 4);
    t.deepEqual(Object.keys(mErr), ['name', 'message', 'stack', 'field']);
    t.true(Array.isArray(mErr.stack));
    t.false(/TEST/.test(mErr.stack[0]));
    t.is(mErr.field, 'bla');
    t.deepEqual(mErr.message, ['TEST', 'TEST', 'TEST']);
    t.is(mErr.name, 'Error');
});

test('custom stack', t => {
    const err = new Error('TEST');
    err.stack = 42;
    t.is(m(err).stack, 42);
    err.stack = 'foo\nok';
    t.is(m(err).stack[0], 'ok');
    Reflect.deleteProperty(err, 'stack');
    t.is(m(err).stack, undefined);
});
