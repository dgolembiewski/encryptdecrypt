//encrypt
const crypto = require('crypto');
algorithm = '';
password = '';


function encrypt(text, algorithm, password) {
    let cipher = crypto.createCipher(algorithm, password);
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

module.exports = encrypt





