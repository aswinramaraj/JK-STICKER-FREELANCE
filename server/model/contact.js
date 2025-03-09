const express = require('express')
const mongoose = require('mongoose')
const contactschema = new mongoose.Schema({
    name : {type:String,required:true},
    email : {type:String,required:true},
    message : {type:String,required:true}
})

const Contactmodel = mongoose.model('contact',contactschema)

module.exports = Contactmodel;