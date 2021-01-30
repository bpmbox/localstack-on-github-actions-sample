#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LocalstackWorkStack } from '../lib/localstack-work-stack';

const app = new cdk.App();
new LocalstackWorkStack(app, 'LocalstackWorkStack');
