const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const artists = require('./routes/artists')
const artworks = require('./routes/artworks')
const collections = require('./routes/collections')

app.use(require('body-parser').json())
app.use(require('morgan')('dev'))
app.use(require('knex-logger')(require('./db')))

app.use('/artists', artists)
app.use('/artworks', artworks)
app.use('/collections', collections)

const listener = (req, res) => {
  console.log(`Hey buddy. I am listening to you on port ${port}.`)
}

app.listen(port, listener)
