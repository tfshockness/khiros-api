//TO DO
//Transfor this module to return a promise which can handle the errors
const bcrypt = require('bcrypt-nodejs');

const ENCRYPT_PWR = 10;

const encrypt = (value) => {

    bcrypt.genSalt(ENCRYPT_PWR, (err, salt) => {
        if(err) return err;
        bcrypt.hash(value, salt, (err, hashedPassword) => {
            if(err) return err;
            return hashedPassword;
        });
    });

}

