const router = require('express').Router();
const upload = require('../config/Cloudinary')
const {
  getsubComments,
  getsubComment,
  createsubComment,
  updatesubComment,
  deletesubComment
} = require("../controllers/subcomment.controller");


// Projects
router.get("/subcomments", getsubComments);
router.get("/subcomment/:id", getsubComment);
router.post("/subcomments/:id", createsubComment);
router.patch("/subcomments/:id", updatesubComment);
router.delete("/subcomments/:id", deletesubComment);


module.exports = router;



