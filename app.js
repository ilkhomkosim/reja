// console.log("Web serverni boshlash");
// const express = require('express')
// const app = express();
// const fs = require("fs");

// // MongoDB

// const db = require("./server");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) =>{
//     if(err) {
//         console.log("ERROR", err);
//     } else {
//         user = JSON.parse(data)
//     }
// });

// //1 Kirish codelari

// app.use(express.static("public"));
// app.use(express.json());
// // kirib kelayotkan json formatdagi datani objectga o'girib beradi
// app.use(express.urlencoded({extended: true}));
// // bu kod htmldan tradidional forum request  bron narsani request qilsak bizni express forumimiz qabul qilib oladi


// //2 sessions code

// //3 Views code
// // BSSRsa front end yasash
// app.set("views", "views");
// app.set("view engine", "ejs");
// // ejsda backendda front end yasaymiz

// //4 Routing code
// app.post("/create-item", (req, res) => {
//     console.log(req.body);
//     const new_reja = req.body.reja;
//     db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
//         if(err) {
//             console.log(err);
//             res.end("something wenty wrong")
//         } else {
//             res.end("succesfully edded");
//         }
//     });
// });

// app.get('/', function(req, res){
//     db.collection("plans")
//     .find()
//     .toArray((err, data) =>{
//         if(err) {
//             console.log(err);
//             res.end("something went wrong");
//         } else {
//             console.log(data);
//             res.render("reja");
//         }
//     });
//     res.render("reja.ejs");
// });
// app.get("/author", (req, res) =>{
//     res.render("author", {user: user})
// });

// module.exports = app;

const express = require("express");
const app = express();
const http = require("http");

// MongoDB chaqirish:
const db = require("./server").db();
const mongodb = require("mongodb");

// 1: Kirish kodlari
app.use(express.static("public")); // Bu har qanday browserdan kirib kelayotkan requestlar uchun public folder ochiq degan manoni bildiradi. Faqatgina public folderni kora oliwadi yani clientlar
app.use(express.json()); // kirib kelayotkan json formatdagi datani object formatga ogirib beradi!
app.use(express.urlencoded({
    extended: true
})); // HTML dan traditional request form shakl bor va formdan nmanidur post qisak express qabul qilib oladi

// 2: Sessions kodlari

// 3: Views kodlari
app.set("views", "views"); //folderni korsatyapmiz
app.set("view engine", "ejs"); //view enjin ejs ekanligini korsatb beryapmz

// 4: Router kodlari
app.post("/create-item", function (req, res) {
    console.log("user entered /");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({
        reja: new_reja
    }, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    console.log(id);
    db.collection("plans").deleteOne(
        {_id: new mongodb.ObjectId(id)},
    function(err, data) {
        res.json({state: "success"});
    });
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans")
    .findOneAndUpdate(
        {_id: new mongodb.ObjectId(data.id)},
        {$set:{reja:data.new_input}}, 
    function(err, data){
        res.json({state: "success"});
    });
})

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function() {
            res.json({state: "hamma rejalar o'chirildi"});
        });
    }
});

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("Something went wrong!");
            } else {
                res.render("reja", {items: data});
            }
        });
});

module.exports = app;