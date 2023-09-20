const mongoose = require('mongoose')
 const schema = mongoose.Schema;

 const userSchema = new schema({
      name : {
         type:String,
         require:true
      },
      email : {
        type: String,
        require: true,
        unique:true
      },
      password : {
         type : String,
         require :true
      }

 })

 module.exports  = mongoose.model('registeruser', userSchema)