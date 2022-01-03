const fs = require('fs');

const axios = require('axios');
const aws = require('aws-sdk');

const env = process.env.STAGE || 'lcl';
const CONFIG = JSON.parse(fs.readFileSync(`config/${env}.json`, 'utf-8'));

const codedeploy = new aws.CodeDeploy({ apiVersion: '2014-10-06' });

module.exports.post = async (event) => {
  const params = {
    deploymentId: event.DeploymentId,
    lifecycleEventHookExecutionId: event.LifecycleEventHookExecutionId
  };

  try {
    const url = CONFIG.healthUrl;
    const response = await axios.get(url, { timeout: 30000 });
    console.log(response);
    if (response.status === 200) {
      params.status = 'Succeeded';
      //params.status = 'Failed';
    } else {
      params.status = 'Failed';
    }
  } catch (error) {
    params.status = 'Failed';
  }
  try {
    await codedeploy.putLifecycleEventHookExecutionStatus(params).promise();
  } catch (error) {
    console.log(error);
  }
};
