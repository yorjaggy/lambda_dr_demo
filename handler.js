'use strict';
const fs = require('fs');
const path = require('path');

const env = process.env.DEMOSTAGE || 'lcl';
const CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, `./config/${env}.json`), 'utf-8'));

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        hello: "world - version 1",
        message: CONFIG.message,
        region: CONFIG.region,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
