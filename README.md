# Save Logs using Lambdas and DynamoDB

This project is used to save a generic logs on a AWS DynamoDB Table using AWS API Gateway and AWS Lambdas.

## Usage

### Docker

Install Docker on your computer to use LocalStack services, to run DynamoDB Local on it -> [Install Doc](https://docs.docker.com/engine/install/)

### LocalStack

Install LocalStack on your computer to use AWS Services -> [Install Doc](https://docs.localstack.cloud/getting-started/installation/)

### LocalStack Usage

After install LocalStack on yout computer, execute the commands bellow.

```
localstack start --detached
```

This command will be create and start a LocalStack container on your Docker.

```
localstack status services
```

This command will be show you all AWS avaliables services on your Docker Container.

### Project Usage

After all install node packages.

```
npm install --save
```

After that, create DynamoDB Table, execute command bellow.

```
npm run deploy:dynamo
```

Then execute the project using command bellow.

```
npm run start
```

### Executing Endpoints

Import the `./resources/insomnia.json` file on your [Insomnia](https://insomnia.rest/download)
