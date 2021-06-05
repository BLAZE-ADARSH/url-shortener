const express = require('express');
const ejs  = require('ejs');
const uuid = require('uuid');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 3000 ;
dotenv.config();


// static 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI , {useNewUrlParser:true , useCreateIndex : true , useUnifiedTopology : true , useFindAndModify : true});
const con = mongoose.connection ;
con.once('open' , ()=> {
    console.log('DataBase is connected ');
}).catch((err) => {
    console.log(err);
})

// set template engien
app.set('view engine','ejs');
app.set('views',path.join(__dirname , '/views'));

// routes 
require('./server/routes/route')(app);

// listening 
app.listen(port , ()=> {
    console.log(`Server is running at PORT - ${port}`);
});

