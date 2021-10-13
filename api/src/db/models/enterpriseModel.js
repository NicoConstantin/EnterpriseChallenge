const mongoose = require('mongoose')

const enterpriseSchema = new mongoose.Schema({
  });

const Enterprise = mongoose.model('Enterprise', enterpriseSchema);

module.exports = Enterprise