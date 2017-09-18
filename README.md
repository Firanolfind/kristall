# Kristall
Modern Front-end Application Boilerplate

Current core stack: **browserfy + babel + sass + gulp**

## Purpose
Allow developer to controls tools, not vice versa. To achieve painlessly project tune.

## Advantages
Flexibility, easy customization. Configuration in one place. Tasks tree structure.

## Install

```
npm install -g kristall
```

## Getting started
 
Create new project using command

```
kristall new path-to-app
cd path-to-app
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

## Presets
By default Babel setup for **ES2015** and **React** presets. 
For customization see `config/env/$NODE_ENV/babel.js`.