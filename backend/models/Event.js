const { Schema, model } = require('mongoose');

const eventSchema = new Schema(
  {
    name: String,
    dateTime: String,
    localTime: String,
    description: String,
    image:String,
    point: {
        type: {
          address: {
            type: String,
            require: true
          },
          coordinates: {
            type: [Number],
            require: true
          }
        },
        require: true
      },
        creatorId:{
            type:Schema.Types.ObjectId,
            ref:'User'
          }
  },
  {
    timestamps: true,
    versionKey: false
  }
);



module.exports = model('Event', eventSchema);
