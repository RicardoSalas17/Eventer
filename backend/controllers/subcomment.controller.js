const SubComment = require("../models/SubComment");
const Comment = require("../models/Comment");


exports.getsubComments = async (req, res) => {
  const subcomment = await SubComment.find();
  res.status(200).json(subcomment);
};

exports.getsubComment = async (req, res) => {

  const subcomment = await SubComment.findById(id);
  res.status(200).json(subcomment);
};

exports.createsubComment = async (req, res) => {
  // console.log("hoa")
  const { 
    content
     // image
          } = req.body

  const { user } = req;
  const { id } = req.params;

  const subcomment = await SubComment.create({
    content,
     // image
    owner: user._id
  });

  const commentUpdated = await Comment.findByIdAndUpdate(
    id,
    { $push: { subComments: subcomment._id } },
    { new: true }
  );

  oldComment=Comment.findById(id) 
  oldComment= commentUpdated;

  res.status(201).json(subcomment);
};

exports.updatesubComment = async (req, res) => {
  const { 
    content,
     // image
  } = req.body;
  const { id } = req.params;

  const subcomment = await SubComment.findByIdAndUpdate( id, { 
    content,
     // image
  });
  res.status(200).json({ message: "Subcomment updated"});
};

exports.deletesubComment = async (req, res) => {
  const { id } = req.params;
  await SubComment.findByIdAndDelete(id);
  res.status(200).json({ message: "Subcomment deleted" });
};