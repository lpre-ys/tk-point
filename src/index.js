const m = require('mithril');

const Component = require('./component/root.js');

const root = document.getElementById('app-container');

m.mount(root, Component);
