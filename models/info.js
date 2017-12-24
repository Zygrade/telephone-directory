const mongoose = require('mongoose');

const InformationSchema = new mongoose.Schema({
    firstName : { type : String },
    lastName : { type : String },
    phone : { type : String },
    email : { type : String },
    address : { type : String }
});

module.exports = mongoose.model('Information',InformationSchema);
