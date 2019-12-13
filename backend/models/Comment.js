const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    content:String,
    // image:String,
    // point: {
    //     type: {
    //       address: {
    //         type: String,
    //         require: true
    //       },
    //       coordinates: {
    //         type: [Number],
    //         require: true
    //       }
    //     },
    //     require: true
    //   },
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
          subComments:[
           { type:Schema.Types.ObjectId,
            ref:'subComments'}
          ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);



module.exports = model('Comment', commentSchema);
