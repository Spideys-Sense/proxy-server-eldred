const express = require('express');
const axios = require('axios');
const { productDisplayPort: PORT } = require('../env');

const router = express.Router();
const MODULE_URL = `http://localhost:${PORT}`;

router.get('/productDisplayBundle', (req, res) => {
  axios.get(`${MODULE_URL}/bundle`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.status(404);
      res.send('Failed to fetch product display bundle.');
    });
});

router.get('/api/:id/summary', (req, res) => {
  const { id } = req.params;
  axios.get(`${MODULE_URL}/api/${id}/summary`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.status(404);
      res.send('Failed to fetch product display summary.');
    });
});
router.get('/api/:id/images', (req, res) => {
  const { id } = req.params;
  axios.get(`${MODULE_URL}/api/${id}/images`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.status(404);
      res.send('Failed to fetch product display images.');
    });
});

router.post('/api/:id/cart', (req, res) => {
  const { amount } = req.query;
  const { id } = req.params;
  axios.post(`${MODULE_URL}/api/${id}/cart`, {
    params: {
      amount,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.status(404);
      res.send('Failed to post product to cart.');
    });
});

module.exports = router;
