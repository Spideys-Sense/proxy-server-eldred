const express = require('express');
const router = express.Router();
const axios = require('axios');
const { itemDescriptionPort: PORT, itemDescriptionHost } = require('../env');
const MODULE_URL = `${itemDescriptionHost}`;

router.get('/itemDescriptionBundle', (req, res) => {
  console.log('Got to item description route on proxy!');
  axios.get(`${MODULE_URL}/bundle`)
    .then((response) => {
      console.log('got bundle! sending to client');
      res.send(response.data);
    })
    .catch((err) => {
      console.log(`didn't get bundle.`);
      res.send('Code failed.');
    })
})

router.get('/api/:id/information', (req, res) => {
  const { id } = req.params;
  console.log('Got request for summary');
  axios.get(`${MODULE_URL}/api/${id}/information`)
    .then((response) => {
      console.log('got information data! sending to client');
      console.log(`data: ${response}`)
      res.send(response.data);
    })
    .catch((err) => {
      res.send('Code failed.');
      console.log(`error retrieving information`);
    })
});
router.get('/api/scrollboxes', (req, res) => {
  console.log('Got request for images');
  axios.get(`${MODULE_URL}/api/scrollboxes`)
    .then((response) => {
      console.log('got scrollboxes data! sending to client');
      res.send(response.data);
    })
    .catch((err) => {
      res.send('Code failed.');
      console.log(`error retrieving scrollboxes`);
    })
});

router.post('/api/:id/cart', (req, res) => {
  const { amount } = req.query;
  const { id } = req.params;


});

module.exports = router;




module.exports = router;
