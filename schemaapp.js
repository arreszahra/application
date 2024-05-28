const mongoose= require('mongoose')
 const schemaContact= new mongoose.Schema({
    fullName:{type:String},
    email:{type:String, },
    phoneNumber:{type:Number },
    birthDate:{type:Number}

 })
 const contact= mongoose.model('contact', schemaContact)
module.exports = contact ;
