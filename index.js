const lightningPayReq = require('bolt11')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	  res.send('Hello World!')
})

app.get('/decode/:bolt11', function (req, res) {
	const decoded = lightningPayReq.decode(req.params.bolt11)
	res.send(JSON.stringify(decoded));
})

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})
