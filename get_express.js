/**
 * Created by quang on 15/06/2017.
 */
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

const bodyParser = require("body-parser");

nunjucks.configure('views', {
    autoescape: true,
    cache: false,
    express: app,
    watch: true
});


app.use(bodyParser.urlencoded({
    extended: true
}));
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    let a = parseFloat(req.query.a) ;
    let b = parseFloat(req.query.b) ;
    let c = a + b ;

    res.render('index.html', {a: a, b: b,c: c});
})
app.listen(4000, () => {
    console.log('listen port 4000')
})