Taking the lazy way out of things ...

"const yourvarname = require ('./thedesiredmodule');" 
   can be added to your existing code.

You can also run this from the CLI using the format:

node -p "require('./encrypt')('Text to encrypt goes here', 'mode of encryption here', 'password here');

node -p "require('./decrypt')('hash to decrypt goes here', 'mode of decryption here', 'password here');

Ciphers.txt are a simple list of encryption modes you can use for testing.  There is no guarantee any one of them is not without problems when coding.

The node_modules folder is small enough to leave in for this demo.