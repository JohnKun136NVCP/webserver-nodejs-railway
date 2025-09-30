require('dotenv').config({quiet:true})
const express = require('express')
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Midleware - Static
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{
        name: 'John',
        title:'NodeJs'
    });
})


app.get('/elements',(req,res)=>{
    res.render('elements',{
        name: 'John',
        title:'NodeJs'
    });
});
app.get('/generic',(req,res)=>{
    res.render('generic',{
        name: 'John',
        title:'NodeJs'
    });
});


/*app.get('*',(req,res)=>{
    res.sendFile(__dirname+'/public/404.html');
});
*/

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});
