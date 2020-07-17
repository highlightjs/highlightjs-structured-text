# ST Language Support

[![Greenkeeper badge](https://badges.greenkeeper.io/highlightjs/highlightjs-structured-text.svg)](https://greenkeeper.io/)

This repository provides syntax highlighting for Highlight.js for Structured Text. ST is one of the 6 languages of IEC 61131-3 standard developed in 1998 for developing PLC programs.

We want to provide ST syntax highlights in VS Code Markdown editor and Markdown preview. And other cases when tutorials are published in the web.

## Usage

Include the `highlight.js` script package in your webpage or node app, load this module and register it with `hljs`. Follow instructions at [highlightjs](https://highlightjs.org/) to learn how to include the library and CSS.

If you're not using a build system and just want to embed this in your webpage:

```html
<script type="text/javascript" src="/path/to/highlight.pack.js"></script>
<script type="text/javascript" src="/path/to/highlightjs-structured-text/iecst.js"></script>
<script type="text/javascript">
    hljs.registerLanguage('iecst', window.hljsDefineIECST);
    hljs.initHighlightingOnLoad();
</script>
```

If you're using webpack / rollup / browserify / node:

```javascript
var hljs = require('highlightjs');
var hljsDefineCUrl = require('highlightjs-structured-text');

hljsDefineIECST(hljs);
hljs.initHighlightingOnLoad();
```

Mark the code you want to highlight with the curl class:

```html
<pre><code class="iecst">...</code></pre>
```

or use JavaScript to dynamically highlight text:

```javascript
hljs.registerLanguage('iecst', window.hljsDefineIECST);
var highlighted = hljs.highlightAuto(text, ["iecst"]);
```
