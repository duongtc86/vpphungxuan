const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

app.use(express.static("public"));
app.set('views', './views');
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
    res.render('index');
    res.end();


});

const PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
    console.log("start server");
});
