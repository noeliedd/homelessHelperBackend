dbSchema = {  
    user: {
        firstName: {type :String, required: true},
        lastName: {type :String, required: true},
        email: {type :String, required: true, unique: true},
        password: {type :String, required: true},
        phoneNumber: {type :String, required: true},
        role: {type :String, required: true}
       }
}
module.exports = dbSchema;  