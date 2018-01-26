// temporary solution
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
let port = process.env.PORT || 5000

let app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))
app.listen(port)

console.log(`Server started on port ${port}`)
