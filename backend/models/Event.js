const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
  {
    eventName: String,
    dateTime: String,
    localTime: String,
    description: String,
    image:String,
    lng: Number,
        lat: Number,
        direction:String,
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);



module.exports = model('Event', eventSchema);



