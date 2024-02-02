console.log("Web serverni boshlash");
const express = require('express')
const app = express();
const http = require("http");
//1 Kirish codelari

app.use(express.static("public"));
app.use(express.json());
// kirib kelayotkan json formatdagi datani objectga o'girib beradi
app.use(express.urlencoded({extended: true}));
// bu kod htmldan tradidional forum request  bron narsani request qilsak bizni express forumimiz qabul qilib oladi


//2 sessions code

//3 Views code
// BSSRsa front end yasash
app.set("views", "views");
app.set("view engine", "ejs");
// ejsda backendda front end yasaymiz

//4 Routing code


app.get("/hello", function(req, res) {
    res.end("<h1>Hello World by IlkhomKosimov</h1>");
});
app.get("/gift", function(req, res) {
    res.end("<h1>Siz sovg'alar bo'limidasiz</h1>");
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is qrunning succesfully on port: ${PORT} `);
});