var db = connect("mongodb://rootuser:rootpass@localhost:27017/admin");

db = db.getSiblingDB('activa'); // we can not use "use" statement here to switch db

db.createUser(
    {
        user: "activa",
        pwd: "qwerty33",
        roles: [ { role: "readWrite", db: "activa"} ],
        passwordDigestor: "server",
    }
)