const express = require("express");
const path = require('path');
const router = require("./routes/routes");
const expressHandlebars = require('express-handlebars');
const override = require('method-override');


const app = express();

const hb = expressHandlebars.create({defaultLayout: "main"});
app.engine('handlebars', hb.engine);
app.set('view cache', true);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join( __dirname, 'public')));

app.use(override((req, res)=> {
    if (req.body && typeof req.body === 'object' && 'method' in req.body) {
        const method = req.body.method;
        delete req.body.method;
        return method
    }
}))

app.use("/", router);

app.listen(3000, ()=> {console.log("Listening at port 3000...")});