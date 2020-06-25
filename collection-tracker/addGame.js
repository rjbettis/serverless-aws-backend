'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.endpoint = (event, context, callback) => {
  var params = {
    TableName: process.env.GAME_TEST_TABLE_THREE,
    Item: {
      platform: event.platform,
      sortName: event.name + ' - ' + uuid.v1(),
      name: event.name,
      cover: event.cover,
      completeness: event.completeness,
    },
  };

  dynamoDb.put(params, function (err, data) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success', data);
    }
  });
};
