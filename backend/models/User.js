const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: String,
    email: String,
    image: String,
    events: [{
      type: Schema.Types.ObjectId,
      ref: "Event",
      populate:{
      path:"comments",
      // populate:{ 
      // path: "subComments",
      // model:"SubComment",
      // populate:{path:"owner"}
      // }
    }
    }]
  },
  
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)

