var path = require('path'),
		app = require('express')(),
		http = require('http').Server(app),
		io = require('socket.io')(http),
		port = process.env.PORT || 8080,
		history = require('connect-history-api-fallback'),
		serveStatic = require('serve-static')

app.use(serveStatic(path.join(__dirname, '/dist')))

http.listen(port, () => {
	console.log('listening on port', port)
})
