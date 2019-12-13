const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
  {
    eventName: String,
    dateTime: String,
    localTime: String,
    description: String,
    image:String,
    point: {
        
          address: {
            type: String,

          },
          coordinates: {
            type: [Number],

          },
      },
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



