const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const urlSchema = new Schema({
    url : {
        type : String ,
        required : true
    },
    slug : {
        type : String ,
        required: true,
    }
});

const urlDB = mongoose.model('urlDB' , urlSchema);

module.exports  = urlDB ;

