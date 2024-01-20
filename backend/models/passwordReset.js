const mongoose = require('mongoose');
const schema = mongoose.schema ; 

const newSchema = ({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    account:{
        type:String,
        required:true
    }
})