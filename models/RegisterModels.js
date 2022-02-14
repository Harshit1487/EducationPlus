
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const registerTemplate = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    phone:{
        type:Number,
        required: true,
        
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

registerTemplate.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

module.exports = mongoose.model('registertable',registerTemplate)