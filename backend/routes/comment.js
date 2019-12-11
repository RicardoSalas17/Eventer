const router = require('express').Router();
const upload = require('../config/Cloudinary')
const {
//   getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment
} = require("../controllers/comment.controller");


// Projects
// router.get("/comment", getComments);
router.get("/comment/:id", getComment);
router.post("/comments", createComment);
router.patch("/comments/:id", updateComment);
router.delete("/comments/:id", deleteComment);


module.exports = router;



