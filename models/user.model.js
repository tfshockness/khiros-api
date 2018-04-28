const mongoose = require('mongoose');
//I WILL LET HERE JUST FOR A REMINDER. DONT USER THAT SHIT
//const bcrypt = require('bcrypt-nodejs');
const bcrypt = require('bcrypt');

const ENCRYPT_PWR = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});
//Adding methods to the model

userSchema.methods.name = () => this.username;

userSchema.methods.checkPassword = (guess, done) => {
    bcrypt.compare(guess, this.password, (err, isMatch) => {
        done(err, isMatch);
    });
}

//adding encryption

let noop = function() {}; //to be used with bcrypt

//using Mongoose Middleware to encrypt the password
//DONT USER ES6 Arrow Functions for moongose. Because you will lose the this bind.
userSchema.pre('save', async function(next){
    var user = this;
    // http://mongoosejs.com/docs/api.html#document_Document-isModified
    if(!user.isModified('password')) next();

    //The documentation is unclear on this: it states that data, salt and cb are required, which implies that progress isn't, but without it you'll get the error.
    //Null is for Progress
    const hash = await bcrypt.hash(user.password, ENCRYPT_PWR)
    user.password = hash;
    
});


module.exports = mongoose.model('User', userSchema);