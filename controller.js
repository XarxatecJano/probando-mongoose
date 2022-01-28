const mongoose = require("mongoose");
const Book = require("./model/Book");
const connection = require("./config/connection");
const res = require("express/lib/response");


exports.deleteBookByTitle = async (req, res)=>{
    try{
        const result= connection();
        const deleteStatus = await Book.deleteOne({title: req.body.title}).exec();
        res.send(deleteStatus);
    }catch(err) {
        res.send(err)
    }
}

exports.findBookByTitle = async (req, res)=>{
    try{
        const result= connection();
        const book = await Book.findOne({title: req.query.title}).exec();
        res.json(book);
    }catch(err) {
        res.send(err)
    }
}

exports.insertNewBook =  (req, res)=>{
    try {
        const result =  connection();
        const pubDate = new Date(req.body.pubDate);
        const newBook = new Book({title: req.body.title, pages: req.body.pages, author: req.body.author, editionDate: pubDate});
        newBook.save();
        res.redirect("/");
    } catch(err){
        res.send(err);
    }
    
}
