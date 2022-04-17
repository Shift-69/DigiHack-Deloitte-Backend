const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    tip: { type: String, required: true },
    specie: { type: String, required: true },
    culoare: { type: String, required: true },
    rasa: { type: String },
    nume: { type: String },
    marime: { type: String },
    tel: {type: String, required: true },
    email: {type: String, required: true },
    recompensa: { type: Number },
    adresa: { type: String, required: true }, 
    date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;