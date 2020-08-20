var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ittest')
var Schema = mongoose.Schema


var adminSchema = new Schema({
    studentusername:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Admin',adminSchema)