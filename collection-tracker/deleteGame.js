'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.endpoint = (event, context, callback) => {
  var params = {
    TableName: process.env.GAME_TEST_TABLE_THREE,
    Key: {
      sortName: event.sortName,
      platform: event.platform,
    },
  };

  dynamoDb.delete(params, function (err, data) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success', data);
    }
  });
};
