let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let router = require('./routes/router');

let port = process.env.PORT || 9901;
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    //设置跨域访问
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /*让options请求快速返回*/
    }else {
        next();
    }
})

app.use(router);

app.listen(port, () => {
    console.log(`devServer start on port:${ port}`);
});
