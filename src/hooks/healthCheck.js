'use strict';

module.exports.healthCheck = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        status: "alive"
      },
      null,
      2
    ),
  };
};
