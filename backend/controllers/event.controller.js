const Event = require("../models/Event");
const User = require("../models/User");

exports.getEvents = async (req, res) => {
  const events = await Event.find().populate("owner")
   .populate({
    path:"comments",
    populate:{ 
    path: "owner",
    model:"User",
    }})
  res.status(200).json({ events });
};

exports.getEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id).populate("owner")
  .populate({
  path:"comments",
  populate:{ 
  path: "owner",
  model:"User",
  }})
  
  res.status(200).json(event);
};

exports.createEvent = async (req, res) => {
  const { eventName,
    dateTime,
    localTime,
    description,
    lng,
    lat,
    direction,
          } = req.body

  const { user } = req;
  let createEvent;


  if (req.file) {
    createEvent =  {
      eventName,
    dateTime,
    localTime,
    description, 
    lng,
    lat,
    direction,
    owner: user._id,
    image: req.file.secure_url
      
    }
    
  }else {
    createEvent ={
    eventName,
    dateTime,
    localTime,
    description,
    lng,
    lat,
    direction,
    owner: user._id
    } 
    
    }
    const eventCreated = await Event.create(createEvent);
  const userUpdated = await User.findByIdAndUpdate(
    user._id,
    { $push: { events:eventCreated._id } },
    { new: true }
  );

  req.user = userUpdated;

  res.status(201).json(eventCreated);
};




exports.updateEvent = async (req, res) => {
  const { eventName,
    dateTime,
    localTime,
    description
          } = req.body
          const { id } = req.params
          let eventUpdate

  if (req.file) {
     eventUpdate = await Event.findByIdAndUpdate(id,{
      $set:
    {  eventName,
    dateTime,
    localTime,
    description,
    image: req.file.secure_url}
      
    })}
  else {
     eventUpdate = await Event.findByIdAndUpdate(id,{
    $set:
   {
    eventName,
    dateTime,
    localTime,
    description,
    } 
  })
}

Event.findOneAndUpdate(id, eventUpdate) 

  res.status(201).json(eventUpdate);
};






exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  await Event.findByIdAndDelete(id);
  res.status(200).json({ message: "event deleted" });
};