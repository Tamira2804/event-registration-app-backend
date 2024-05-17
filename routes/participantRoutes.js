const express = require('express')
const router = express.Router()
const Participant = require('../models/Participant')

router.get('/:eventId', async (req, res) => {
  try {
    const eventId = req.params.eventId
    const participants = await Participant.find({ eventId: eventId })
    res.json(participants)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

router.post('/:eventId', async (req, res) => {
  try {
    const { eventId, name, email, birthdate, source } = req.body
    const participant = new Participant({
      eventId: eventId,
      name: name,
      email: email,
      birthdate: birthdate,
      source: source,
    })
    const savedParticipant = await participant.save()
    res.status(201).json(savedParticipant)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})
module.exports = router
