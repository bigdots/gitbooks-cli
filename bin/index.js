#!/usr/bin/env node

console.log("hello world");

const program = require('commander');

import init from './init';

program
  .version('0.0.1')
  .command('init <dir>')
  .action(init);
// --help

// --init xxx

// --new xxx

// --version