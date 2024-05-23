const express = require('express')
const router = express.Router()
const Event = require('../models/Event')

router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 4

    const events = await Event.find()
      .limit(limit)
      .skip((page - 1) * limit)

    const total = await Event.countDocuments()
    const totalPages = Math.ceil(total / limit)

    res.json({
      events,
      totalPages,
      currentPage: page,
      totalEvents: total,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:eventId', async (req, res) => {
  try {
    const eventId = req.params.eventId
    const event = await Event.findById(eventId)
    if (!event) {
      return res.status(404).json({ message: 'Event not found' })
    }
    res.json(event)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.post('/:eventId/register', async (req, res) => {
  try {
    const eventId = req.params.eventId
    const { name, email, dob, source } = req.body
    const event = await Event.findById(eventId)
    if (!event) {
      return res.status(404).json({ message: 'Event not found' })
    }
    event.participants.push({ name, email, dob, source })
    await event.save()
    res.status(201).json(event)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})
module.exports = router
