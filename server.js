// server.js

var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

let app = express()
app.use(serveStatic(path.join(__dirname, '/dist')))
app.use(serveStatic(path.join(__dirname, '/dist/css')))
app.use(serveStatic(path.join(__dirname, '/dist/js')))

var port = process.env.PORT || 5000
app.listen(port)

console.log(`server started on ${port}`)
