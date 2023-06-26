![img](https://assets.imaginablefutures.com/media/images/ALX_Logo.max-200x150.png)


## Concepts
For this project, look at the following concepts
- [Modern JavaScript](https://intranet.alxswe.com/concepts/541)
- [Sofware Linter](https://intranet.alxswe.com/concepts/542)


![is-this-this](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230626%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230626T145326Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=59b4cc8744c5444e02fe446592828c45fd88dadd273b4b770ee83a19ceb3a138)


## Resources
__Read or watch__
1. [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
2. [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
3. [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
4. [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
5. [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
6. [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=262f1ebd4637)

## Learning objectives
At the end of this project, you are expected to  be able to [explain to anyone](https://fs.blog/feynman-learning-technique/) __without the help of Google__:

* [X] What ES6 is
* [X] New features introduced in ES6
* [X] The difference between a constant and a variable
* [X] Block-scoped variables
* [X] Arrow functions and function parameters default to them
* [X] Rest and spread function parameters
* [X] String templating in ES6
* [X] Object creation and their properties in ES6
* [X] Iterators and for-of loops

## Setup
### Install NodeJS 12.11.x

*(in your home directory):*
```

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
### Install Jest, Babel, and ESLint

*in your project directory:*

Install Jest using: `npm install --save-dev jest`

Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`

Install ESLint using: `npm install --save-dev eslint`

## Configuration files
- package.json
- babel.config.js
- .eslintrc.js