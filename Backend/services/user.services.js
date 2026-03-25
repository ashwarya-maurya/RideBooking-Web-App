const userModel = require('../models/user.models');

module.exports.createUser = async({
    firstname, lastname, email, password
}) =>{
    if (!firstname || !email || !password){
        throw new Error('All fields are required');
    }
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}

module.exports.findUser = async({ email }) => {
    return await userModel.findOne({ email }).select('+password');
}