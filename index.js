// Import packages and set the port 
import bodyParser from "body-parser";
import express from "express";
import routes from "./routes/routes.js";
import mysql from "mysql";

var db = mysql.createConnection({
    host: "localhost",
    user: "sa",
    password: "12345",
    database: "test-db"
});


const port = 3002;
const app = express();
// Use Node.js body parsing middleware 
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

routes(app, db);

// Start the server 
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});