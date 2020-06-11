# Pacman Skeleton

<img src="https://img.shields.io/badge/made_with-QUICKSILVER">
<img src="https://img.shields.io/badge/made_by-Toast NZ">

- These are very basic instruction on how to set up your new package with npm.
- For more detailed instructions view [How to publish npm packages](https://zellwk.com/blog/publish-to-npm/)

# Before you publish your package

Start by ensuring your package is working

With the skeleton package you may run gulp as you please while writing / updating your function.

In your project's app.js add something similar to the following.

```js
import {pacman, ghost} from '../packages/pacman/';

pacman();
ghost();
```

Or 

```js
import * as Skeleton from '../packages/pacman/';

Skeleton.pacman();
Skeleton.ghost();
```

#Once your package is working and ready to be published

- Remove package.json & package-lock.json

Initialise the package with npm.

```sh
$ npm login
$ cd package/directory
$ npm init
$ npm publish
```

Install the dev dependencies

```sh
$ npm i @babel/core @babel/preset-env gulp gulp-babel gulp-browserify gulp-concat gulp-plumber
```

And then set the package.json "test" to "gulp"

```json
"scripts": {
  "test": "gulp"
}
```

Create a [git repo](https://github.com/new) for your package

Install [np](https://www.npmjs.com/package/np) to help publish your packages

```sh
$ sudo npm install --global np
```

Once updates are made and pushed to the git repo, you can publish the package to npm using 

```sh
$ np
```
