'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.endpoint = (event, context, callback) => {
  var params = {
    TableName: process.env.GAME_TEST_TABLE_THREE,
    FilterExpression: 'platform = :platform',
    ExpressionAttributeValues: {
      ':platform': event.platform,
    },
  };

  dynamoDb.scan(params, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.Items);
    }
  });
};
