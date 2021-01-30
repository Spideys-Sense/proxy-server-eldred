const express = require('express');
const axios = require('axios');
const { customerReviewsPort: PORT } = require('../env');

const MODULE_URL = `http://localhost:${PORT}`;
const router = express.Router();

router.get('/customerReviewsBundle', (req, res) => {
  axios.get(`${MODULE_URL}/main.js`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.send('Code failed.');
    });
});

router.get('/api/:id/reviews', (req, res) => {
  const { id } = req.params;
  const { sortBy, rating } = req.query;
  axios.get(`${MODULE_URL}/api/${id}/reviews/`, {
    params: {
      sortBy,
      rating,
    }
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.send('Code failed.');
    });
});

router.get('/api/:id/reviewAverages', (req, res) => {
  const { id } = req.params;

  axios.get(`${MODULE_URL}/api/${id}/reviewAverages`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
      res.send('Code failed.');
    });
});

module.exports = router;
