// Use lowdb with simple json file to demo DB
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortid = require('shortid')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ posts: [] }).write();

// Use express for web server
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').createServer(app)
const port = 3000

// Add socket io to web server
const io = require('socket.io')(http);


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/************** Express Routing ****************/
app.get('/', (req, res) => res.send('Hello World!'))

// Get list posts
app.get('/api/posts', (req, res) => {
    const posts = db.get('posts').value();
    res.send(posts);
});

// Add a post
app.post('/api/posts', (req, res) => {
    req.body.id = shortid.generate();
    const post = db.get('posts').push(req.body).write();
    res.send(req.body);
});

/************* Socket.io events ************/
io.on('connection', function(socket){
    console.log('a user connected');
    // Handle when socket client send `message` event
    socket.on('message', (msg) => {
        // Emit event `message` to all client
        io.emit('message', msg);
    });
});


// Start server
http.listen(port, () => console.log(`Example app listening on port ${port}!`))