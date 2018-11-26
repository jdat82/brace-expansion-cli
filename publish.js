#!/usr/bin/env node

'use strict';

const meow  = require('meow');
const Listr = require('listr');
const execa = require('execa');
const chalk = require('chalk');


const cli = meow(`
    Usage
      $ ./publish.js <version>
 
    Options
      --help, -h  Show help
 
    Examples
      $ ./publish.js 0.0.1
`, {
    description:'Publish on NPM',
    flags:{
        help:{
            type:'boolean',
            alias:'h'
        }
    }
});

if(cli.flags.help) cli.showHelp(0);

const tasks = new Listr([
    {
        title:'Check logged in user',
        task:async () => {
            let result;
            try{
                result = await execa.shell('npm whoami');
            } catch(err){
                throwErr();
            }
            if(result.stdout !== 'jdat82') throwErr();

            ////////////////////
            function throwErr() {
                throw new Error('Please log in into npm as jdat82 first');
            }
        }
    },
    {
        title:'Publish on npm',
        task:() => {
            return execa.shell('npm publish --access=public');
        }
    }
]);

tasks.run().catch(err => {
    console.log();
    console.error(chalk.red(err && err.message || err));
});
