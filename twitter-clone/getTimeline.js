'use strict';
const AWS = require('aws-sdk');
const request = require('request');
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');

module.exports.endpoint = (event, context, callback) => {
  // Initialize
  const oauth = OAuth({
    consumer: {
      key: process.env.TWITTER_KEY,
      secret: process.env.TWITTER_SECRET,
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return crypto
        .createHmac('sha1', key)
        .update(base_string)
        .digest('base64');
    },
  });

  const request_data = {
    url:
      'https://api.twitter.com/1.1/statuses/home_timeline.json?tweet_mode=extended',
    method: 'GET',
  };

  // Note: The token is optional for some requests
  const token = {
    key: process.env.TWITTER_TOKEN_KEY,
    secret: process.env.TWITTER_TOKEN_SECRET,
  };

  request(
    {
      url: request_data.url,
      method: request_data.method,
      form: request_data.data,
      headers: oauth.toHeader(oauth.authorize(request_data, token)),
    },
    function (error, response, body) {
      callback(null, body);
    }
  );
};
