'use strict';
const AWS = require('aws-sdk');
const axios = require('axios');
const fetch = require('node-fetch');

const TWITCH_SECRET = process.env.TWITCH_SECRET;
const TWITCH_ID = process.env.TWITCH_ID;

module.exports.endpoint = async (event, context, callback) => {
  const response = await fetch(
    'https://id.twitch.tv/oauth2/token?client_id=' +
      TWITCH_ID +
      '&client_secret=' +
      TWITCH_SECRET +
      '&code=' +
      event.code +
      '&grant_type=authorization_code&redirect_uri=http://localhost:3000/TwitchAuth',
    {
      method: 'POST',
    }
  );

  const res = await response.json();

  callback(null, res);
};
