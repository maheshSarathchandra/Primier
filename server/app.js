var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
Book = require('./model/book');
Favotite = require('./model/favotite');
Comments = require('./model/comment');
app.use(cors());
app.use(bodyParser.json());



// mongoose.connect('mongodb://localhost:27017/store');
// var db = mongoose.connection;

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://owner:owner123@ds235418.mlab.com:35418/bookshop',{ useNewUrlParser: true },(err)=>{
    if(!err){
        console.log('db connected')
    }else{
        console.log('error in db')
    }
});

app.get('/api' ,function (req,res) {
   res.send('Hello world');
});



// show all book
app.get('/api/books',function (req,res) {
 Book.getBooks(function (err,books) {
     if(err){
         throw err;
     }else {
         res.json(books);
     }
 })
});



app.get('/api/favotites',function (req,res) {
    Favotite.getFavotite(function (err,books) {
        if(err){
            throw err;
        }else {
            res.json(books);
        }
    })
});

// find one book
app.get('/api/books/:_id',function (req,res) {
    var id = req.params._id;
    Book.getBookById(id,function (err,book) {
        if(err){
            throw err;
        }else {
            res.json(book);
        }
    })
});

app.get('/api/comments',function (req,res) {
    Comments.getComment(function (err,comments) {
        if(err){
            throw err;
        }else {
            res.json(comments);
        }
    })
});
// add one book
app.post('/api/books',function (req,res) {
    var book = req.body;
    Book.addBook(book,function (err,book) {
        if(err){
            throw err;
        }else {
            res.json(book);
        }
    })
});

app.post('/api/favotites',function (req,res) {
   var favotite = req.body;
    Favotite.addFavotite(favotite,function (err,favotite) {
       if(err){
          throw err;
        }else {
           res.json(favotite);
        }
    })
});

app.post('/api/comments',function (req,res) {
    var comment = req.body;
    Comments.addComment(comment,function (err,comment) {
        if(err){
            throw err;
        }else {
            res.json(comment);
        }
    })
});
//upadete one book
app.put('/api/books/:_id',function (req,res) {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id,book,{},function (err,book) {
        if(err){
            throw err;
        }else {
            res.json(book);
        }
    })
});























app.delete('/api/books/:_id',function (req,res) {
    var id = req.params._id;
    Book.removeBook(id,function (err,book) {
        if(err){
            throw err;
        }else {
            res.json(book);
        }
    })
});
app.delete('/api/favotites/:_id',function (req,res) {
    var id = req.params._id;
    Favotite.removeFavotite(id,function (err,favotite) {
        if(err){
            throw err;
        }else {
            res.json(favotite);
        }
    })
});

app.delete('/api/comments/:_id',function (req,res) {
    var id = req.params._id;
    Comments.removeComment(id,function (err,comments) {
        if(err){
            throw err;
        }else {
            res.json(comments);
        }
    })
});

app.post('/api/login',function (req,res) {

   let user = {
       username:'llschgs',
       email:'lslsg@gmail.com',
       password:'13w45432563'
   };

    jwt.sign(user,'secretkey',(err,token)=>{
        res.json({
            token
        })
    })


});

app.listen(3000);
console.log('Running on port 3000 ...');