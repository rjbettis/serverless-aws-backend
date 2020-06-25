'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.endpoint = (event, context, callback) => {
  var params = {
    TableName: process.env.PLATFORM_TEST_TABLE,
    Item: {
      id: '1',
      platform: event.platform,
    },
    ConditionExpression: 'attribute_not_exists(platform)',
  };

  dynamoDb.put(params, function (err, data) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success', data);
    }
  });
};
