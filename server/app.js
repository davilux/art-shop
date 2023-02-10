const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())

//api routes
app.use('/api', require('./api'))

//static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})


module.exports = app
