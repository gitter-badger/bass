<img width="100" src="https://raw.githubusercontent.com/verzola/bass/master/src/img/bass.png">

# :musical_score: Bass

[![Greenkeeper badge](https://badges.greenkeeper.io/verzola/bass.svg)](https://greenkeeper.io/)
![](https://travis-ci.org/verzola/bass.svg?branch=master)
![](https://david-dm.org/verzola/bass/status.svg)
![](https://david-dm.org/verzola/bass/dev-status.svg)

Boilerplate for static website based on webpack, best practices and modern tools.

[:rocket: Demo](https://bass-demo.netlify.com/)

## Table of contents

1. [Features](#features)
2. [Requirements](#requirements)
3. [Instructions](#instructions)
   1. [Webpack](#webpack)
   2. [Babel](#babel)
   3. [ESLint & Stylelint](#es-style-lint)
   4. [Prettier, Husky & Lint-staged](#prettier-husky-lintstaged)
   5. [SASS](#sass)
   6. [PostCSS](#postcss)
   7. [Google Fonts](#google-fonts)
4. [Contribuiting](#contrib)
5. [TODO](#todo)

## :trophy: Features <a id="features"></a>

- Webpack to bundle application
- Write modern JavaScript with Babel
- Lint your code with ESLint and Stylelint
- Format your code with Prettier
- Ensure every commit is formatted with Husky & Lint-staged
- Optimize and minify HTML, CSS, JS and images
- Auto prefixes CSS
- 7in1 SASS pattern

## :ballot_box_with_check: Requirements <a id="requirements"></a>

- :whale: [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

OR

- [Node](https://nodejs.org/en/download/)
- NPM or [Yarn](https://yarnpkg.com/en/docs/install)

## :scroll: Instructions <a id="instructions"></a>

```sh
# clone repo
$ git clone https://github.com/verzola/bass.git
# enter in directory
$ cd bass

# run on docker
$ docker-compose up -d

# or run locally
$ yarn # or npm install
# develop with hot code reload
$ yarn run dev # or npm run dev

# other scripts
$ yarn run build # builds website to dist folder
$ yarn run format # formats code using prettier
$ yarn run lint # lint js & scss
$ yarn run lint:js # lint js only
$ yarn run lint:scss # lint scss only
```

### :spider_web: :package: Webpack <a id="webpack"></a>

Webpack bundles your application

**Config:** _webpack.config.js_.

[Learn more about Webpack](http://webpack.js.org/)

### :tropical_fish: Babel <a id="babel"></a>

Write modern JavaScript and compile to JavaScript that old browsers understand.

[Learn more about Babel](https://babeljs.io/)

### :no_entry_sign: :hankey: ESLint & StyleLint <a id="es-style-lint"></a>

Lint your code with community recommended standards.

**ESLint Config**: \*.eslintrc.json\*\*

**Stylelint Config**: _.stylelintrc.json_

[Learn more about ESLint](https://eslint.org/)

[Learn more about StyleLint](https://stylelint.io/)

### :no_entry_sign: :hankey: Prettier, husky & Lint-staged <a id="prettier-husky-lintstaged"></a>

A pre-commit hook ensures that the files you commit are properly formatted.

[Learn more about Prettier](https://prettier.io/)

[Learn more about Husky](https://github.com/typicode/husky)

[Learn more about Lint-staged](https://github.com/okonet/lint-staged)

### :eyeglasses: SASS <a id="sass"></a>

Based on [sass-boilerplate](https://github.com/HugoGiraudel/sass-boilerplate) with some vertical rhythm tweaks and some default style.

### PostCSS <a id="postcss"></a>

PostCSS is configured with CSSNano and Autoprefixer plugins.

CSSNano minifies and optimizes the output CSS.

Autoprefixer adds browser prefixes automatically based on browserlist on **package.json**.

**PostCSS Config:** _postcss.config.js_.

[Learn more about CSSNano](https://cssnano.co/)

[Learn more about Autoprefixer](https://autoprefixer.github.io/)

### Google Fonts <a id="google-fonts"></a>

The default installation comes with Open Sans Google Font downloaded locally.
If you a different Google Font, you can use [Google Webfonts Helper](https://google-webfonts-helper.herokuapp.com/fonts) to download the CSS snippet and the fonts file and put them on _src/base/\_fonts.scss_ and _/src/fonts/_ respectively.

## Contributing <a id="contrib"></a>

Contribuitions are welcome. If you find any problem or have a suggestion, please [open an issue](https://github.com/verzola/bass/issues/new).

## :warning: Known issues

- Watch does not work on Docker Desktop on Windows ([see](https://discourse.roots.io/t/browsersync-not-watching-changes-in-docker-for-windows/11275))

## :memo: TODO

- [ ] Imagemin section on README
- [ ] Normalize.css section on README
- [ ] Footer style
- [ ] Grid component
- [ ] Contribute file
- [ ] Pull request template file
- [ ] Progressive Web App
- [ ] Favicon
- [ ] OpenGraph
- [ ] Other important meta tags
- [ ] Extract babel config to a file
- [ ] Create a chat and badge
