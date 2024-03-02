#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');

const program = new Command();

program
  .option('-c, --create <fileName>', 'Create a new file')
  .option('-r, --read <fileName>', 'Read a file')
  .parse(process.argv);

if (program.create) {
  fs.writeFile(program.create, '', (err) => {
    if (err) {
      console.error('Error creating file:', err);
    } else {
      console.log(`File ${program.create} created successfully!`);
    }
  });
}

if (program.read) {
  fs.readFile(program.read, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log(`Contents of ${program.read}:`);
      console.log(data);
    }
  });
}