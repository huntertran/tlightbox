![Build Status](https://github.com/huntertran/tlightbox/workflows/Node%20CI/badge.svg)
![Publish Status](https://github.com/huntertran/tlightbox/workflows/Node.js%20Package/badge.svg)

<!-- TOC -->

- [1. Demo](#1-demo)
- [2. Install](#2-install)
    - [2.1. Vue Compatibility](#21-vue-compatibility)
    - [2.2. NPM](#22-npm)
- [3. Usage](#3-usage)
    - [3.1. Register the component](#31-register-the-component)
    - [3.2. Image settings](#32-image-settings)
    - [3.3. Other options](#33-other-options)

<!-- /TOC -->


Simple native Vue.js lightbox

# 1. Demo
<a id="markdown-1-demo" name="1-demo"></a>
https://huntertran.github.io/tlightbox/

# 2. Install
<a id="markdown-2-install" name="2-install"></a>

## 2.1. Vue Compatibility
<a id="markdown-21-vue-compatibility" name="21-vue-compatibility"></a>
> Compatible with Vue 2.0

## 2.2. NPM
<a id="markdown-22-npm" name="22-npm"></a>
```bash
$ npm install tlightbox
```

# 3. Usage
<a id="markdown-3-usage" name="3-usage"></a>

## 3.1. Register the component
<a id="markdown-31-register-the-component" name="31-register-the-component"></a>

```js
import lightbox from 'tlightbox';
Vue.use(lightbox);
```

Basic markup should look like this

```html
<lightbox :images="images"></lightbox>
```

## 3.2. Image settings
<a id="markdown-32-image-settings" name="32-image-settings"></a>

Accepts array containing image objects, properties accepted are caption and src.

```js
images: [
    {
        src: 'https://unsplash.it/500',
        thumbnail: 'https://unsplash.it/500'
        caption: 'Image 1',
    },
    {
        src: 'https://unsplash.it/501',
    },
],
```

## 3.3. Other options
<a id="markdown-33-other-options" name="33-other-options"></a>

Remove all styles to the image gallery, overlay not included
- Default: `false`

```js
:resetstyles="false" 
```

Add h1 with title above gallery
- Default: null

```js
:title="Demo Gallery" 
```

Show loading when image is not downloaded
- Default: `true`

Setup loading styles: Normal or Heart Icon
- Default: `normal`

```html
<lightbox :isShowLoading='true' :loadingStyle='heart'></lightbox>
```

Loop back to the first image when at the end of the gallery
- Default: `true`

```js
:loop="true" 
```

Show next, back and close buttons on overlay
- Default: `true`
```js
:nav="true" 
```

Show captions on images with the caption property
- Default: `true`
```js
:caption="true"
```
