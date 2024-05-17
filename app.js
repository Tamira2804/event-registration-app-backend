const express = require('express')
const cors = require('cors')

const eventRouter = require('./routes/eventRoutes')
// const participantRouter = require('./routes/participantRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/events', eventRouter)
// app.use('/participant', participantRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json(message)
})

module.exports = app
