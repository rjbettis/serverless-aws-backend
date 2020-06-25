'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.endpoint = (event, context, callback) => {
  var params = {
    TableName: process.env.PLATFORM_TEST_TABLE,
  };

  // Call DynamoDB to get platform tabs
  dynamoDb.scan(params, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.Items);
    }
  });
};
