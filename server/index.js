const express = require('express')
const contactsRouter = require('../connects')
const app = express()

app.use('/', contactsRouter)

module.exports = app