const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(express.static(__dirname + '/../public/build'));

let messageCtrl = require('./controllers/messages_controller.js')

app.use(bodyParser.json())

app.post('/api/messages', messageCtrl.create)

app.get('/api/messages', messageCtrl.read)

app.put(`/api/messages/:id`, messageCtrl.update)

app.delete('/api/messages/:id', messageCtrl.delete)

app.listen(port, () => console.log(`listening on port ${port}`))