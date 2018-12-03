<img width="100" src="https://raw.githubusercontent.com/verzola/bass/master/src/img/bass.png">

# :musical_score: Bass

Boilerplate for static website based on webpack, best practices and modern tools.

[Demo](https://bass-demo.netlify.com/)

## Features

- Webpack to bundle application
- Write modern JavaScript with Babel
- Lint your code with ESLint and Stylelint
- Format your code with Prettier
- Ensure every commit is formatted with Husky & Lint-staged
- Optimize and minify HTML, CSS, JS and images
- Auto prefixes CSS
- 7in1 SASS pattern

## Requirements

- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

OR

- [Node](https://nodejs.org/en/download/)
- NPM or [Yarn](https://yarnpkg.com/en/docs/install)


## Instructions

```sh
# clones this repository
$ git clone https://github.com/verzola/bass.git

# enter in directory
$ cd bass

# install node dependencies
$ yarn # or npm install

# develop with hot code reload
$ yarn run dev

OR

$ docker-compose up -d

# builds static website to dist folder
$ yarn run build

# formats code
$ yarn run format
```

### Webpack

You can tweak webpack config at **webpack.config.js**.

[Learn more about Webpack](http://webpack.js.org/)

### Babel

Write modern JavaScript and compile to JavaScript that old browsers understand.

[Learn more about Babel](https://babeljs.io/)

### ESLint & StyleLint

Lint your code with community recommended standards.

ESLint config: **.eslintrc.json**

Stylelint config: **.stylelintrc.json**

[Learn more about ESLint](https://eslint.org/)

[Learn more about StyleLint](https://stylelint.io/)

### Prettier, husky & Lint-staged

A pre-commit hook ensures that the files you commit are properly formatted.

[Learn more about Prettier](https://prettier.io/)

[Learn more about Husky](https://github.com/typicode/husky)

[Learn more about Lint-staged](https://github.com/okonet/lint-staged)

### SASS

Based on [sass-boilerplate](https://github.com/HugoGiraudel/sass-boilerplate) with some vertical rhythm tweaks and some default style.

### PostCSS

PostCSS is configured with CSSNano and Autoprefixer plugins.

CSSNano minifies and optimizes the output CSS.

Autoprefixer adds browser prefixes automatically based on browserlist on **package.json**.

PostCSS configuration is located on **postcss.config.js** folder.

[Learn more about CSSNano](https://cssnano.co/)

[Learn more about Autoprefixer](https://autoprefixer.github.io/)

## TODO
- Progressive Web App with Workbox Webpack Plugin
- Add greenkeeper to keep packages updated
