# react-create
Simple React CLI that aims to speed up development by generating desired React component markup based on your preferences via the command line.

## Installation
### Via NPM
Make sure to install this module globally so you can run the command from anywhere.
```bash
npm install -g react-create
```
### Or via Github repo
Clone Repository
```bash
$ git clone https://github.com/ipeters90/react-create.git
```
Navigate to the repo
```bash
$ cd react-create
```
Lastly, run command in root folder of repo to add script to NPM path (So you can execute anywhere)
```bash
$ npm link
```

## Usage

    Usage: react-create [component name]

    Options:
      -v, --version    Outputs the version number (e.g react-create -v)
      -h, --help       Prints out usage options
      -d, --dir        Creates a [componen name] directory with component file inside. (Default is just the component file)
      -p, --pkg        Includes a package.json file with component
      --es5            Generates the compoenent with React's ES5 syntax. (Default is ES6).
      --jsx            Creates the component with `.jsx` extenstion. (Default is `.js`)
      --entry          Bootstraps the component with the 'ReactDOM.render' function.
      
## Examples
#### Create `Header` Component folder with appropriate component files and a package.json 
```bash
$ react-create Header -d -jsx -p
```
will create
```bash
Header
\
  -- Header.jsx // With ES6 Markup of a React component
  -- Header.css
  -- package.json // With name, main and version number markup included
```

#### Simply create a component file written in `ES5` (note the `.js` extension instead of `.jsx`)
```bash
$ react-create Header --es5
```
will create
```bash
Header.js // With ES5 Markup of a React component
```
