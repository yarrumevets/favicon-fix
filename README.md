# 🟥 favicon-fix

Serves a bright red favicon to stop /favicon.ico errors, generated from a very small 1×1 source image and acting as a reminder to add a real icon.

## Install

```
npm install favicon-fix
```

## Usage (Express example)

```js
// CommonJS
const express = require("express");
const faviconFix = require("favicon-fix");
const app = express();
app.use(faviconFix);

app.listen(3000);
```

```js
// ESM
import express from "express";
import faviconFix from "favicon-fix";
const app = express();
app.use(faviconFix);
app.listen(3000);
```

## What it does

- Registers `/favicon.ico`
- Returns a 1×1 red PNG
- Eliminates favicon errors
- Red icon in browser reminds you to add a favicon to your project

## Why

Browsers request `/favicon.ico` automatically, even if your app has none.

## License

MIT

## External Links

[npmjs.com - favicon-fix](https://www.npmjs.com/package/favicon-fix)
