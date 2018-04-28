const User = require('../models/user.model');

class UserServices{
    create(user){
        let newUser = new User(user);
        newUser.save(err => {
            if (err) return err;
        });

        return newUser;
    }

    all(){
        return User.find();
    }

    getById(id){
        return User.findById(id);
    }
}

module.exports = new UserServices();