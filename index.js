#! /usr/bin/env node
const { program } = require('commander')
const list = require('./commands/list')

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)