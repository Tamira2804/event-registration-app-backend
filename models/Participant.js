const { Schema, model } = require('mongoose')

const participantSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date },
    source: { type: String },
    event: { type: Schema.Types.ObjectId, ref: 'Event' },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

const Participant = model('Participant', participantSchema)

module.exports = Participant
