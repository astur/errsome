const errsome = err => Object.assign({
    name: err.name,
    message: err.message,
    stack: err.stack && err.stack.split ? err.stack.split('\n').map(s => s.trim()) : err.stack,
}, err);

module.exports = errsome;
