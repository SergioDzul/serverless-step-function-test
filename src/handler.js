'use strict';
const AWS = require('aws-sdk');
const stepFunction = new AWS.StepFunctions();

module.exports.hello = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello world!",
            input: event
        })
    };

    callback(null, response);
};

module.exports.init = (event, context, callback) => {
    /*
    tmp
     */
    console.log("process.env.STATE_MACHINE_ARN", process.env.STATE_MACHINE_ARN);
    const date = new Date().valueOf();
    const params = {
        stateMachineArn: process.env.STATE_MACHINE_ARN,
        name: 'test-execution-'+date.toString()
    };
    console.log("params", params);

    stepFunction.startExecution(params, (err, data) => {
        if(err){
            console.log(err);
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    message: "There was an error",
                })
            };

            callback(null, response);
        }else{
            console.log(data);
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    message: "Step function worked!",
                    input: event
                })
            };

            callback(null, response);
        }
    });
};
