const request = require('request-promise-native');
const config = require('../config');
const newsApiUrl = config.newsApiURL + config.newsApiKey;

function fetchArticles () {
  return request(newsApiUrl, { json: true }, (err, res, body) => {
    if (err) {
      console.log(err);
      return {}
    }

    return body.articles;
  });
}

module.exports.fetchArticles = fetchArticles;