/*let a = 5;


titi.js
module.exports = {
    toto: 1,
    gatA: () => {
        
        return this.toto;
    },
    setA: (o) => {
        a = o;
    }
} 

const x = require('./titi.js');

const a = 4;

TextDecoderStream('test', function (returnValue) {
    if(returnValue === a) {
    
    }
})

/**
 * Schemas MongoDB
 * Model
 */
const { Schema, model } = require('mongoose');

var userSchema = new Schema({
    username: String,
    password: String,
    age: Number,
});

const userModel = model('User', userSchema);

module.exports = userModel;