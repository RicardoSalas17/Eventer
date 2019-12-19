const router = require('express').Router();
const upload = require('../config/cloudinary')
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
router.post("/events", upload.single("image"), createEvent);
router.patch("/editevents/:id", upload.single("image"), updateEvent);
router.delete("/events/:id", deleteEvent);


module.exports = router;



