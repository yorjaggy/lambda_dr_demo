## Lambda HA: DR and rollback Demo

This is a simple Lambda function to show a small implementation of Disaster recovery and rollback strategies on AWS

## WIP
- add a CI/CD (CodePipeline or Github Actions)
- add stages to deploy the artifact obtained with ```sls package```

## What is in this repo?
- simple lambda function
    - created with serverless create --template aws-nodejs
- package.json created with ```npm init```
- on serverless.yml file you will find the serverless-offline plugin
    - installed with npm install serverless-offline --save-dev
- config folder with two config files for each region we want it to run on DEV environment
- src/hooks folder with healthCheck and rollbackHook files, first one return a valid response with a 200 HTTP code,
    second one validate the healthcheck response and depending on that response will continue the deployment or will stop and rollback to previos function. This rollback mechanism is being executed using the sls plugin https://www.npmjs.com/package/serverless-plugin-canary-deployments

## Testing locally
```
export DEMOSTAGE=dev1
serverless offline
open browser on http://localhost:3000/hello
```


## Steps to deploy
```
export DEMOSTAGE=dev1
serverless deploy 
```

## Future Work
- Implement DR on multiple environments (QA or PRD)