const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

  name:{
      type:String,
      required:true
  },
  image:{
      type:String,
      required:true
  },
  price:{
      type:String,
      required:true
  },
  quanity:{
      type:String,
      required:true
  },
  cat_Id: mongoose.Types.ObjectId
})

module.exports = mongoose.model('products',productSchema);