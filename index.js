#! /usr/bin/env node

var exec = require('child_process').exec;
var fs = require('fs');

var args = process.argv.slice(2);
var component = args[0];
var dir = __dirname.split('/').pop();
var createFile, subDir = '';

// options passed in as arguments
var withFolder = args.indexOf('--dir') > -1;
var withJSX = args.indexOf('--jsx') > -1;
var withPkg = args.indexOf('--pkg') > -1;
var es5 = args.indexOf('--es5') > -1;

// Loading in appropriate templates
var tmpl = require('./constants/templates');

// Adding extensions for component
var extensions = [];
withJSX ? extensions.push('.jsx') : extensions.push('.js');
if (withFolder) extensions.push('.css');

// Detecting if platform is Windows, OSX, or Linux
switch(process.platform) {
    case 'darwin':
        createFile = 'touch ';
        break;
    case 'win32':
        createFile = 'echo > ';
        break;
    case 'linux':
        createFile = 'touch ';
        break;
    default:
        throw new Error('Unsupported platform: ' + process.platform);
}

// Creating component folder
if (withFolder) {
  exec('mkdir ' + component, function(err, stdout) {
    if (err) throw err;
  });
  subDir = component + '/';
}

// Loop through to create necessary files
extensions.forEach(function(ext) {
  exec(createFile + subDir + component + ext, function(err, stdout) {
    if (err) throw err;
  });
})

// Writing up markup to component (.js or jsx) file
fs.writeFile(subDir + component + extensions[0], tmpl.cmpt, function(err) {
  if (err) throw err;
})

// Creating package.json pointing to component (via main) if needed
if (withPkg) {
  exec(createFile + subDir + 'package.json');
  fs.writeFile(subDir + 'package.json', tmpl.pkg, function(err) {
    if (err) throw err;
  })
}