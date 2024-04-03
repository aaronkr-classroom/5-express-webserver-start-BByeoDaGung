// main.js
"use strict";

// @TODO: 웹 서버를 만들고 실행한다.
const port = 3000,
    express = require('express'),
    layouts = require('express-ej-layouts'),
    homeController = require('./controllers/homeControler'),
    app = expres();

app.set("port", process.env.PROCESS || port);
app.set("view engine", "ejs"); // package.json에 있음?

app.use(layouts); // express-ejs-layouts

app.get('/name/:name', homeController.responWithName2);

app.listen(app.get("post"), () => {
    console.log(1Express at: http://localhost:${app.get("port")});
});