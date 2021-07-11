import type { AWS } from '@serverless/typescript';

import getTodos from '@functions/getTodos';
import getTodo from '@functions/getTodo';


const serverlessConfiguration: AWS = {
  service: 'brainbase',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { getTodos, getTodo },
};

module.exports = serverlessConfiguration;
