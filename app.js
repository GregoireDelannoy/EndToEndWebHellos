const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json());

app.post('/checkout', (req, res) => {
	var waitTime = Math.floor(Math.random() * 3000)
	console.log(`Received ${req}. Will wait ${waitTime}ms before answering`)
  setTimeout(() => res.json({val: `Hello ${req.body.name}. I made you wait for ${waitTime}ms!`}), waitTime)
})
app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
