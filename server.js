const express = require("express"); 
const mongoose = require('mongoose');  
const expressLayouts = require('express-ejs-layouts') 
const methodOverride = require("method-override")

const PORT = 3001; 

const app = express();   

app.use(express.static("public")); 

app.use(expressLayouts); 

app.use(methodOverride("_method"));

app.set('view engine', "ejs");  

const flightsRoute = require("./routes/flights"); 
const indexRoute = require("./routes/index");   
const destinationsRoute = require("./routes/destinations");


app.use('/', flightsRoute); 
app.use('/', indexRoute);   
app.use('/', destinationsRoute);



app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/mongooseLabs", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
},
()=> { 
    console.log("mongodb connected successfully!");
});

app.listen(PORT, ()=> console.log(`App is running on ${PORT}`)); 