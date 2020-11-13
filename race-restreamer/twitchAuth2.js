'use strict';
const AWS = require('aws-sdk');
const axios = require('axios');
const fetch = require('node-fetch');

module.exports.endpoint = async (event, context, callback) => {
  const response = await fetch('https://api.twitch.tv/helix/users', {
    headers: {
      Authorization: 'Bearer ' + event.token,
      'Client-Id': process.env.TWITCH_ID,
    },
  });

  const res = await response.json();

  callback(null, res);
};
