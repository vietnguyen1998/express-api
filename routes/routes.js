const users = [
    {
        id: 1,
        name: "Richard Hendricks",
        email: "richard@piedpiper.com",
    },
    {
        id: 2,
        name: "Bertram Gilfoyle",
        email: "gilfoyle@piedpiper.com",
    },
];

const router = (app, db) => {
    app.get("/", (request, response) => {
        response.send({
            message: "Node.js and Express REST API",
        });
    });

    app.get("/users", (request, response) => {
        response.send(users);
    });

    app.get("/tablecreate", () => {
        var sql = `CREATE TABLE books (
                id INT(11) AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255), 
                slug VARCHAR(255),
                price float, 
                description VARCHAR(4000),
                imageURL VARCHAR(255),
                showhide BOOLEAN,
                idCat INT(11)
            )`;
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");
            response.send("Table created");
        });
    });
};

// Export the router 
export default router;