const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=process.env.Port || 8000;

//Express Specific stuff
app.use(express.static('static'));
app.use('/static',express.static('static'))//for serving static files
app.use(express.urlencoded())

//PUG specific stuff
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'));

//Endpoints
app.get('/',(req,res)=>{
   
    
    res.status(200).render('index.pug');
})
app.get('/home',(req,res)=>{
   
    
    res.status(200).render('index.pug');
})


app.get('/services',(req,res)=>{
   
    //const params={}
    res.status(200).render('services.pug');
})
app.get('/contact',(req,res)=>{
   
    
    res.status(200).render('contact.pug');
})

//start the server
app.listen(port,()=>{
    console.log("server is started");
});