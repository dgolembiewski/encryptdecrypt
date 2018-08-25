// decrypt
const crypto = require('crypto');
algorithm = '';
password = '';


function decrypt(text, algorithm, password) {
    let decipher = crypto.createDecipher(algorithm, password);
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

module.exports = decrypt





