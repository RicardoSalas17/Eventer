const Event = require("../models/Event");
const Comment = require("../models/Comment");



exports.getComment = async (req, res) => {

  const comment = await Comment.findById(id);
  res.status(200).json(comment);
};

exports.createComment = async (req, res) => {
  const { 
    content
    //  image
          } = req.body

  const { user } = req;
  const { id } = req.params;

  const comment = await Comment.create({
    content:content,
     // image
    owner: user._id
  });

  const eventUpdated = await Event.findByIdAndUpdate(
    id,
    { $push: { comments: comment._id } },
    { new: true }
  );

  oldEvent=Event.findById(id) 
  oldEvent= eventUpdated;

  res.status(201).json(comment);
};

exports.updateComment = async (req, res) => {
  const { 
    content,
     // image
  } = req.body;
  const { id } = req.params;

  const comment = await Comment.findByIdAndUpdate( id, { 
    content,
     // image
  });
  res.status(200).json({ message: "comment updated"});
};

exports.deleteComment = async (req, res) => {
  const { id } = req.params;
  await Comment.findByIdAndDelete(id);
  res.status(200).json({ message: "comment deleted" });
};