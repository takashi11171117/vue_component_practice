var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function (_, res) {
  res.json('hello socket server');
});

io.on('connection', function (socket) {
  var user = Date.now()

  socket.on('message.sent', function(message) {
    io.emit('message', `${user}: ${message}`)
  })

  io.emit('message', `User ${user} connected`)
})

http.listen(3000, function() {
  console.log('Started server')
})