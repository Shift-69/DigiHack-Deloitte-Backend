const router = require('express').Router()

let Post = require('../models/post');

router.route('/').get(async(req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post(async(req, res) => {
  
  console.log("aici", req.body)
  const tip = req.body.tip;
  const specie = req.body.specie;
  const culoare = req.body.culoare;
  const rasa = req.body.rasa;
  const nume = req.body.nume;
  const tel = req.body.tel;
  const marime = req.body.marime;
  const email = req.body.email;
  const recompensa = Number(req.body.recompensa);
  const adresa = req.body.adresa;
  const date = Date.parse(req.body.date);

  const obj = {
    tip,
    specie,
    culoare,
    rasa,
    nume,
    tel,
    email,
    recompensa,
    adresa,
    date,
    marime
  };  
  console.log(obj);
  const newPost = new Post(obj);

 const postAdded= await newPost.save()
 res.status(200).json(postAdded)
 console.log("post added", postAdded)
});

module.exports = router;
