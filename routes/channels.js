var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', async (req, res, next) => {
    res.json(await mongoose.model('Channel').find({}));
  });
  
  router.post('/', async (req, res, next) => {
    res.json(await mongoose.model('Channel').create(req.body));
  });
  
  router.put('/:id', async (req, res, next) => {
    res.json(await mongoose.model('Channel').findByIdAndUpdate(req.params.id, req.body));
  });
  
  router.delete('/:id', async (req, res, next) => {
    res.json(await mongoose.model('Channel').findByIdAndRemove(req.params.id));
  });
  
  router.get('/:id', async (req, res, next) => {
    res.json(await mongoose.model('Channel').findById(req.params.id));
  });

module.exports = router;