const mongoose = require('mongoose')

const enterpriseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase:true,
  },
  address: {
    type: String,
    required: true,
    lowercase:true,
  },
  NIT:{
    type: String,
    required: true,
    validate:{
      validator: (v) => /(^[0-9]+-{1}[0-9]{1})/.test(v),
      message: 'No es un valor NIT válido'
    }
  },
  Phone:{
    type: Number,
    required: true,
  },
  });

const Enterprise = mongoose.model('Enterprise', enterpriseSchema);

module.exports = Enterprise