var path = require('path')
var http = require('http')
var express = require('express')
var port = process.env.PORT || 3000
let app = express()

var serveStatic = require('serve-static')
var history = require('connect-history-api-fallback')

app.use(history({verbose: true}))
app.use(serveStatic(path.join(__dirname, '/dist')))

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', (socket) => {
	console.log('!!!!!!!!!!!!!!!!!!!!!!!! a new connection')
})

server.listen(port)
