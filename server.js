const express = require('express')

const app = express()
const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/app'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'app', 'index.html'))
})

app.listen(port);

console.log(`Listening at http://localhost:${port}`)