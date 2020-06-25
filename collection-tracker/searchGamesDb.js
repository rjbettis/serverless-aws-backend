'use strict';

const fetch = require('node-fetch');

const TGDB_KEY = process.env.THEGAMESDB_KEY;

module.exports.endpoint = async (event, context, callback) => {
  const response = await fetch(
    'https://api.thegamesdb.net/v1.1/Games/ByGameName?apikey=' +
      TGDB_KEY +
      '&name=' +
      event.search +
      '&filter%5Bplatform%5D=' +
      event.platform +
      '&include=boxart'
  );
  const res = await response.json();

  callback(null, res);
};
