
- [Context](#context)
- [Functional overview](#functional-overview)
- [Security and authentication](#security-and-authentication)
- [Software architecture](#software-architecture)
- [Infrastructure](#infrastructure)
- [Deployment](#deployment)
- [Development Environment](#development-environment)

# Context

# Functional overview

# Security and authentication

# Infrastructure

The system is deployed to AWS S3 and served to end users via AWS CloudFront.

# Software architecture

# Deployment
[A concourse pipeline](<%= readme-concourse-url %>) is created for the project under the husdyrfag team. The pipeline uses a the website template from tine-cloud-pipelines, and the api is deployed to S3 and made publicly available via CloudFront on [https://web.husdyrfag[-<env>].io/<%= readme-site-name %>/index.html](https://web.husdyrfag[-<env>].io/<%= readme-site-name %>/index.html).

To fly:

    fly -t husdyrfag set-pipeline \
      -p <%= readme-pipeline-name %> \
      -c ../tine-cloud-pipelines/pipelines/container-app.yml \
      -l ci/config.yml

# Development Environment

This project uses [Create React App](https://github.com/facebookincubator/create-react-app) via our own [Frontend Cli](https://github.com/TINE-SA/tooling-frontend-cli).

You can find the Create React App guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
