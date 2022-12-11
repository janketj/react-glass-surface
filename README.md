# react-glass-surface

[![npm package][npm-badge]][npm]

## Introduction

**react-glass-surface** is:

1. ✨ A container styled like a glass pane (see: glassmorphism)     
2. 💞 Behaves exactly like a `div` and doesn't add another layer    
3. 🖌 Fully-Customizable and easy-to-use                            
4. 🅾 Coming with zero dependencies                                 
5. 🖼 You can pass `style` and `className` to apply your own styles
6. ♻ All props are passed to the container (e.g. `onClick`)

![Settings Window](https://raw.github.com/janketj/react-glass-surface/master/demo/screenshots/demo.png)

## Installation

1. Using yarn

```yarn add react-glass-surface```

2. Using npm

```npm install react-glass-surface```

Make sure that your `React` version is > `16.8`!

[npm-badge]: https://raster.shields.io/npm/v/react-glass-surface?style=flat-square
[npm]: https://www.npmjs.org/package/react-glass-surface

## Basic Usage

```
import Glass from 'react-glass-surface'

const YourComponent = () => {
  return (
    <Glass>
      <p>Content</p>
    </Glass>
  )
}
```

## PROPS

There are different props available to customize the container. None of these are needed. Keep in mind that the css property `backdrop-filter` can only be styled via `className`. The default values for these props are actually styled via `className`. 

```
background: ?string = 'rgba(255, 255, 255, 0.2)'

border: ?string = 'none'

borderRadius: ?string = '0px'

boxShadow: ?string = 'none'

className: ?string = ''

style: ?Object = {}
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
