const Event = require("../models/Event");
const User = require("../models/User");

exports.getEvents = async (req, res) => {
  const events = await Event.find().populate("owner")
// .populate(
//   {path:"owner", model:"User"}
//     )
    .populate({
      path:"comments",
        populate:{ 
      path: "owner",
      model:"User"
    },
    populate:{ 
      path: "subComments",
      model:"SubComment",
      populate:{path:"owner"}
    }
  })

  res.status(200).json({ events });
};

exports.getEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id).populate({
    path: "owner",
    options: { sort: { createdAt: 1 } }
  })
  
  res.status(200).json(event);
};

exports.createEvent = async (req, res) => {
  const { eventName,
    dateTime,
    localTime,
    description,
    // image
          } = req.body

  const { user } = req;

  const event = await Event.create({
    eventName,
    dateTime,
    localTime,
    description,
    // image,
    owner: user._id
  });

  const userUpdated = await User.findByIdAndUpdate(
    user._id,
    { $push: { events: event._id } },
    { new: true }
  );

  req.user = userUpdated;

  res.status(201).json(event);
};

exports.updateEvent = async (req, res) => {
  const { 
    eventName,
    dateTime,
    localTime,
    description,
    // image 
  } = req.body;
  const { id } = req.params;

  const event = await Event.findByIdAndUpdate( id, { 
    eventName,
    dateTime,
    localTime,
    description
    // image
  });
  res.status(200).json(event);
};

exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  await Event.findByIdAndDelete(id);
  res.status(200).json({ message: "event deleted" });
};