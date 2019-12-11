const router = require('express').Router();
const upload = require('../config/Cloudinary')
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent
} = require("../controllers/event.controller");


// Projects
router.get("/events", getEvents);
router.get("/events/:id", getEvent);
router.post("/events", createEvent);
router.patch("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);


module.exports = router;



