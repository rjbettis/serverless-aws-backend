'use strict';
const AWS = require('aws-sdk');
const axios = require('axios');
const fetch = require('node-fetch');

module.exports.endpoint = async (event, context, callback) => {
  const response = await fetch(
    'https://id.twitch.tv/oauth2/token?client_id=sunqwbsa4fs7eckp3upvlct00luz4s&client_secret=i2d9ov57wl5fnjh5vdf11264eejkxq&code=' +
      event.code +
      '&grant_type=authorization_code&redirect_uri=http://localhost:3000/TwitchAuth',
    {
      method: 'POST',
    }
  );

  const res = await response.json();

  const response2 = await fetch('https://id.twitch.tv/oauth2/userinfo', {
    headers: {
      Authorization: 'Bearer ' + res.access_token,
    },
  });

  const res2 = await response2.json();

  callback(null, res2);
};
