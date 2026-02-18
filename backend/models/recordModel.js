const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema(
  {
    recordType: {
      type: String,
      required: true
    },

    hospital: {
      type: String
    },

    date: {
      type: Date
    },

    file: {                 // ⭐ ADD THIS
      type: String,
      required: true
    },

    patient: {
      type: mongoose.Schema.ObjectId,
      ref: 'Patient',
      required: true
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Record', recordSchema);
