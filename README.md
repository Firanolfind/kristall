[![NPM Version](http://img.shields.io/npm/v/kristall.svg?style=flat-square)](https://npmjs.org/package/kristall) [![npm](https://img.shields.io/npm/dm/kristall.svg?style=flat-square)](https://npmjs.org/package/kristall)


# Kristall
Modern Front-end Application Boilerplate

Current core stack: **browserfy + babel + sass + gulp**

## Purpose
Allow developer to controls tools, not vice versa. Main goal is to achieve painlessly project tune.

## Advantages
Flexibility, easy customization. Configuration in one place. Tasks and configs in tree structure.

## Install

```
npm install -g kristall
```

## Getting started
 
Create new project using command

```
kristall new path-to-your-app
cd path-to-app
```

Install dependencies

```
npm install
```

Start watch daemon

```
npm run watch
```

## Tasks
Run other tasks using `npm run task <name>`

### Examples
```
npm run task client
```

```
npm run task server:html
```

### Watch Tasks

List of npm tasks
* `client:watch`
* `server:watch`
* `styles:watch`
* `images:watch`
* `fonts:watch`


## Presets
By default Babel setup for **ES2015** and **React** presets. 
For customization see `config/env/$NODE_ENV/babel.js`.