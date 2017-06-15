/**
 * Created by quang on 14/06/2017.
 */
//các mô đum cần dùng
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require("body-parser");
// cấu hình của nunjucks
nunjucks.configure('views', {
    autoescape: true,
    cache: false,
    express: app,
    watch: true
});
    // sử dụng midleware body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
// sử dụng engine html dùng nunjucks để render ra trang html
app.engine('html', nunjucks.render);

app.set('view engine', 'html');
// render ra trang html
app.get('/', (req, res) => {
    res.render('index2');
});
//
app.post('/', (req, res) => {
    let a = parseFloat(req.body.a) ;
    let b = parseFloat(req.body.b) ;
    let c = a + b ;
    res.render('index2', {a: a, b: b,c: c});
})

app.listen(4000, () => {
    console.log('listen port 4000')
})