# Built with

<p align="center">
  <img style="width:100%;height:auto; max-width:810px" src="http://pinc.nz/git/quicksilver/quicksilver.png">
</p>

# Package Development Environment

- These are very basic instruction on how to set up your new package with npm.
- For more detailed instructions view [How to publish npm packages](https://zellwk.com/blog/publish-to-npm/)
- This project is just here to help with the development of packages, not for publishing packages

# Before you publish your package

- Start by ensuring your package is working
- With the skeleton package you may run gulp as you please while writing / updating your function.
- In your project's app.js add something similar to the following.

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

# Once your package is working and ready to be published

- Create a new directory somewhere on your computer
- Copy the contents of your package to the new directory
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
