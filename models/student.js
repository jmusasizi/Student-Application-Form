const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
    }, 
    lastName:{
        type: String,
        trim:true,
    },
    dateOfBirth:{
        type: Date,
        trim:true,
    },
    entrySheme: {
        type: String,
        trim: true,
    }, 
    intake: {
        type: String,
        trim: true,
    }, 
    course: {
        type: String,
        trim: true,
    },
    sponsorship: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    }, 
    residence: {
        type: String,
        trim: true,
    },  
   
});

module.exports = mongoose.model('student', studentSchema);
