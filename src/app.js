const express = require('express');//we get a function
const path = require('path');
const hbs = require('hbs');
const app = express();//we can access all the methods and properties of express
const port = process.env.PORT || 3000; //dynamic port selection 

//public static path
const static_path = path.join(__dirname,"../public");// gives the path that we require 
const template_path = path.join(__dirname,"../templates/views");// gives the path that we require 
const partials_path = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);


app.use(express.static(static_path)); //top down approach 

//routing
// req is an object 
app.get("",(req,res)=>{
    res.render('index');
});
app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("/weather",(req,res)=>{
    res.render('weather');
});

app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg:'Opps! Page Not Found'
    });
});

app.listen(port ,()=>{
    console.log(`Listening at port ${port}`);
});