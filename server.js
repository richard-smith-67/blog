/**
 * Created by richard.smith on 16/10/2015.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/layout.html')
});

//app.get('/api/posts', function (req, res, next) {
//    Post.find(function(err, posts) {
//        if (err) { return next(err) }
//        res.json(posts)
//    })
//});
//
//app.post('/api/posts', function (req, res, next) {
//
//    var post = new Post({
//        title: req.body.title,
//        body: req.body.body
//    });
//
//    post.save(function (err, post) {
//        if (err) { return next(err) }
//        res.json(201, post)
//    })
//});

app.listen(3000);