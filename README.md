[![Build Status](https://travis-ci.org/huntertran/tlightbox.svg?branch=master)](https://travis-ci.org/huntertran/tlightbox)




# tlightbox

> Simple native Vue.js lightbox

## Demo
https://huntertran.github.io/tlightbox/

## Install

###### Vue Compatibility
> Compatible with Vue 2.0

#### NPM
```bash
$ npm install tlightbox
```

Register the component

```js
import lightbox from 'vlightbox';
Vue.use(lightbox);
```

Basic markup should look like this

```html
<lightbox :images="images"></lightbox>
```

Image settings

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

**Other options are:**

Remove all styles to the image gallery, overlay not included
- Default: false
```js
:resetstyles="false" 
```

Add h1 with title above gallery
- Default: null
```js
title="Demo Gallery" 
```

Loop back to the first image when at the end of the gallery
- Default: true
```js
:loop="true" 
```

Show next, back and close buttons on overlay
- Default: true
```js
:nav="true" 
```

Show captions on images with the caption property
- Default: true
```js
:caption="true"
```