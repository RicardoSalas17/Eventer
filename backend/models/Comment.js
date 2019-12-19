const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    content:String,
    image:String,
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
          // subComments:[
          //  { type:Schema.Types.ObjectId,
          //   ref:'SubComment'}
          // ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);



module.exports = model('Comment', commentSchema);
