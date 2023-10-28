const express = require("express");
const app = express();
app.set('view engine','ejs');
app.set('views','./views');
app.get('/',(req,res)=>{
    res.render('pages/home')
});
app.get('/services',(req,res)=>{
    res.render('pages/services')
});
app.get('/contact',(req,res)=>{
    res.render('pages/contact')
})
app.listen(8000,()=>{
    console.log('the server is running');
})
