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

  phone:{
    type: Number,
    required: true,
    validate:{
      validator: (v) => v.toString().length === 10,
      message: 'El número debe tener 10 caracteres para ser válido'
    }
  },

  });

const Enterprise = mongoose.model('Enterprise', enterpriseSchema);

module.exports = Enterprise