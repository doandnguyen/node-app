const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello Argo CD! This is new update for dev'))
app.listen(80, () => console.log('Server ready'))
