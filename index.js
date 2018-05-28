const errsome = err => Object.assign({
    name: err.name,
    message: err.message,
    stack: err.stack && err.stack.split ? err.stack.split('\n').map(s => s.trim()).slice(1) : err.stack,
}, err);

module.exports = errsome;
module.exports.stringify = (err, sp = 2) => require('json5').stringify(errsome(err), null, sp);
module.exports.log = (err, sp = 2) => console.log(module.exports.stringify(err, sp));
