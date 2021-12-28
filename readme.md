## Lambda HA: DR and rollback Demo

This is a simple Lambda function to show a small implementation of Disaster recovery and rollback strategies on AWS

## What is in this repo?
- simple lambda function
    - created with serverless create --template aws-nodejs
- package.json created with ```npm init```
- on serverless.yml file you will find the serverless-offline plugin
    - installed with npm install serverless-offline --save-dev
- config folder with two config files for each region we want it to run on DEV environment

## Testing locally
```
export DEMOSTAGE=dev DEMOREGION=east1
serverless offline
open browser on http://localhost:3000/hello
```


## Steps to deploy
```
export DEMOSTAGE=dev DEMOREGION=east1
serverless deploy 
```


## Future Work
- Implement DR on multiple environments (QA or PRD)