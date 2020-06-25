'use strict';
const AWS = require('aws-sdk');
const fetch = require('node-fetch');

module.exports.endpoint = async (event, context, callback) => {
  const response = await fetch(
    'https://api.twitch.tv/kraken/users?login=' + event.channel,
    {
      headers: {
        accept: 'application/vnd.twitchtv.v5+json',
        'client-id': process.env.TWITCH_ID,
      },
    }
  );
  const res = await response.json();

  callback(null, res);
};
