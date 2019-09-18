**Serverless Step Function example project.**

Fist you need to create a env file named env.yml in root path

```
$ touch env.yml
```
Video Tutorial: [YouTube Video](https://youtu.be/9MKL5Jr2zZ4)

Create a Step function machine in your AWS web console and put the ARN in the env.yml

AWS web console: [here](https://console.aws.amazon.com/states/home?region=us-east-1#/statemachines)

The definition of the machine need to be like:

```
{
  "Comment": "Test",
  "StartAt": "HelloWorld",
  "States": {
    "HelloWorld": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:example:function:aws-step-functions-dev-hello",
      "End": true
    }
  }
}
```

e.i. env.yml:
```
STATE_MACHINE_ARN: "arn:aws:states:us-east-1:EXAMPLE:stateMachine:helloworld"
```

now install the node dependencies:
```
$ npm install
```

deploy the instance:

```
$ sls deploy
```

Local execute with:
```
$ serverless invoke local --function int --data '{}'
```
