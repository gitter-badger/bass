# Bass

Boilerplate for static website based on webpack.

![Doublebass](https://raw.githubusercontent.com/verzola/bass/master/src/img/bass.png)

## Instructions

```sh
$ git clone https://github.com/verzola/bass.git
$ cd bass
$ yarn
# develop with hot code reload
$ yarn run dev
# builds static website to dist/
$ yarn run build
# formats code
$ yarn run format
```

## Features
- Webpack to bundle application
- Write modern JavaScript with Babel
- Lint your code with ESLint and Stylelint
- Format your code with Prettier
- Ensure every commit is formatted with Husky & Lint-staged
- Concatenate, optimize and minify JS, CSS and images
- Auto prefixes CSS
- Default styling
- Scalable SASS pattern (7in1)

### Webpack

You can tweak webpack config at webpack.config.js.

(Learn more about Webpack)[http://webpack.js.org/]

### Babel

Write modern JavaScript and compile to JavaScript that legacy browsers can understand.

(Learn more about Babel)[https://babeljs.io/]

### ESLint & StyleLint

Lint your code with community recommended standards.

ESLint config: .eslintrc.json

Stylelint config: .stylelintrc.json

(Learn more about ESLint)[https://eslint.org/]

(Learn more about StyleLint)[https://stylelint.io/]

### Prettier, husky & Lint-staged

A pre-commit hook ensures that the files you commit are properly formatted.

(Learn more about Prettier)[https://prettier.io/]

(Learn more about Husky)[https://github.com/typicode/husky]

(Learn more about Lint-staged)[https://github.com/okonet/lint-staged]


### SASS

Based on (sass-boilerplate)[https://github.com/HugoGiraudel/sass-boilerplate] with some vertical rhythm tweaks and some default style.

### PostCSS

PostCSS is configured with CSSNano and Autoprefixer plugins.

Config is located on src/scss/postcss.config.js folder