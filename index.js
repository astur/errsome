const errsome = err => {
    const message = err.message.split('\n');
    return Object.assign({
        name: err.name,
        message: message.length === 1 ? err.message : message,
        stack: err.stack && err.stack.split ?
            err.stack.split('\n').map(s => s.trim()).slice(message.length) :
            err.stack,
    }, err);
};

module.exports = errsome;
module.exports.stringify = (err, sp = 2) => require('json5').stringify(errsome(err), null, sp);
module.exports.log = (err, sp = 2) => console.log(module.exports.stringify(err, sp));
