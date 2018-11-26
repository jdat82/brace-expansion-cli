#!/usr/bin/env node

'use strict';

const expand = require('brace-expansion');
const meow   = require('meow');

const cli = meow(`
    Usage
      $ expand <expression>
 
    Options
      --help, -h        Show help
      --verbose, -v     Verbose output
      --version         Output version
 
    Examples
      $ expand file-{a,b,c}.jpg
        => file-a.jpg file-b.jpg file-c.jpg
        
      $ expand file-{0..4..2}.jpg file-{a..e..2}.jpg
        => file0.jpg file1.jpg file2.jpg file-a.jpg file-b.jpg file-c.jpg
`, {
    flags:{
        help:{
            type:'boolean',
            alias:'h'
        },
        verbose:{
            type:'boolean',
            alias:'v',
            default:false
        }
    }
});

if(cli.flags.help) cli.showHelp(0);

let output = '';
cli.input.forEach(expression => {
    if(output) output += ' ';
    const expandedExpression = expand(expression);
    if(cli.flags.verbose){
        console.log(`${expression} → ${expandedExpression}`);
    }
    output += expandedExpression;
});

process.stdout.write(output);
