var express = require('express'),
    bodyParser = require('body-parser');
    app = express();
    app.use(express.static('public'));

    app.use(bodyParser.json()); //does all the chucking and then does a next
    app.use(bodyParser.urlencoded({ extended: true}));

    // app.get('/api/noob', function (req, res, next) {
    //     res.send('Hello!');
    // });
    app.get('/api/lists', function (req, res, next) {
        res.send(lists);
    });

    app.put('/api/lists/:listIndex', function(req, res, next){
        var listIndex = req.params.listIndex;
        console.log(lists[listIndex], req.body);
        lists[listIndex].tasks.push(req.body.text);
        res.send(req.body.text);
    });

    app.post('/api/lists', function (req, res, next) {
        lists[req.body.index].tasks.push(req.body.task);
        console.log(lists[req.body.index].tasks);
        res.send(lists);
    });

    var port = 3000;
    app.listen(port, function() {
        console.log('listening on port:', port);
    });

    var lists = [{
        name: 'personal', tasks: ['sleep', 'eat']
    }, {
        name: 'school', tasks: ['homework', 'study for the test']
    }, {
        name: 'work', tasks: ['get rich', 'get that promotion', 'slap the CEO in the face']
    }];
//Instead of bodyParser
// app.post('api/task', function (req,res) {
//     req.rawBody = '';
//     req.setEncoding('utf8');
//
//     req.on('data', function(chunk){
//         console.log(chunk)
//         req.rawBody += chunk;
//     });
//     req.on('end', function(){
//         console.log(req.rawBody);
//         res.send(req.rawBody);
//     });
// });
