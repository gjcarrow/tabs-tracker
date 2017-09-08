var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var morgan = require('morgan')
var {sequelize} = require('./models')
var config = require('./config/config')

var app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
