'use strict';
const AWS = require('aws-sdk');
const fetch = require('node-fetch');

module.exports.endpoint = async (event, context, callback) => {
  const response = await fetch(
    'https://api.twitch.tv/kraken/users?login=petedorr',
    {
      headers: {
        accept: 'application/vnd.twitchtv.v5+json',
        'client-id': 'nfdjz9d3s5bgrbbld2dhdsqnx3x9qo',
      },
    }
  );
  const res = await response.json();

  callback(null, res);
};

//https://dh470k8a55.execute-api.us-east-1.amazonaws.com/dev/verify-channel?channel=petedorr
