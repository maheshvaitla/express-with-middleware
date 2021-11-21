const express = require("express");
const books = require("./books.json");

const app = express();

app.use(express.json());



app.get("/", (req,res)=>{
    res.send({ books})
});

app.post("/books", (req,res)=>{
    const newbooks = [...books,req.body];
    res.send(newbooks);
})

app.get("/books/:author", (req,res)=>{
    const author = books.filter((book)=>book.author===req.params.author);
    res.send(author);
});

app.patch("/:author", (req,res)=>{
    const newUsers = books.map((author) =>{
        if(req.params.author===user.author){
        return req.body
        }
        return author
    });
    res.send(newUsers);
})


app.delete("/:id", (req,res)=>{
    const newUsers = books.filter((book) => book.id !== req.params.id);
    res.send(newUsers)
})


app.listen(3458, ()=>{
    console.log("lsitening 3458")
});