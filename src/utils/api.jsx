var Fetch = require('whatwg-fetch');
var config = require('./config');
var rootUrl = 'https://api.imgur.com/3/';

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + config.client_id
      }
    })
    .then(function(response) {
      return response.json();
    });
  }
};