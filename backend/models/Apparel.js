const mongoose = require('mongoose');

const apparelSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  type: { type: String, required: true },
  condition: { type: String, required: true },
  preferredAction: { type: String, required: true }, // Disposal, Donation, or Recycling
  status: { type: String, default: 'Pending' }, // Pending, Processed, etc.
});

const Apparel = mongoose.model('Apparel', apparelSchema);

module.exports = Apparel;
