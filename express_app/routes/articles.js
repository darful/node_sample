const express = require('express');
const router = express.Router();
const articleFetcher = require('../lib/article_fetcher');

router.get('/', function (req, res, next) {
  articleFetcher.fetchArticles()
    .then((articles) => {
      res.json(articles);
    });
});

module.exports = router;