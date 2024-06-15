const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/', async (req, res) => {
  const { title, date, description } = req.body;
  try {
    const event = new Event({ title, date, description });
    await event.save();
    res.status(201).send('Event created');
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
