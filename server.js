// const http = require("http");
// const mongodb = require("mongodb");
// const app = require("./app");
// let db;
// const connectionString =
// "mongodb+srv://uilyam:uppE3oXwT8FTnKOk@cluster0.egc6jxs.mongodb.net/reja"


// mongodb.connect(
//     connectionString, 
//     {
//     useNewUrlParser:true,
//     useUnifiedTopology: true,
//     }, 
//     (err, client) => {
//     if(err) console.log("ERROR on connection MongoDb");
//     else{
//         console.log("MongoDB connection succeed");
//         const db = client.db();
//         const server = http.createServer(app);
//         let PORT = 3000;
//         server.listen(PORT, function() {
//             console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
//             );
//         });
//     }
// }
// );

// // const http = require("http");
// // const mongodb = require("mongodb");

// // // Placeholder for the "app" module (replace this with your actual implementation)
// // const app = require("./app");

// // const connectionString = "mongodb+srv://uilyam:uppE3oXwT8FTnKOk@cluster0.egc6jxs.mongodb.net/reja";

// // mongodb.connect(
// //     connectionString,
// //     {
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true,
// //     },
// //     (err, client) => {
// //         if (err) {
// //             console.error("ERROR on connection MongoDB:", err);
// //         } else {
// //             console.log("MongoDB connection succeed");
// //             module.exports = client;
// //             const server = http.createServer(app);

// //             const PORT = 3000;
// //             server.listen(PORT, () => {
// //                 console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
// //             });
// //         }
// //     }
// // );


console.log("Web serverni boshlash");
const http = require("http");
const mongodb = require("mongodb");

// mongodb connection
let db;
const connectionString =
    "mongodb+srv://uilyam:uppE3oXwT8FTnKOk@cluster0.egc6jxs.mongodb.net/reja";
mongodb.connect(
    connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("Error on connection to mongoDB:", err);
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(`
                The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
            });
        }
    }
);