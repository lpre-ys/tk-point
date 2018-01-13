const m = require('mithril');

const Main = require('./main.js');
const Settings = require('./settings.js');

const Root = {
  view: function () {
    return [m(Main), m(Settings)];
  }
};

module.exports = Root;
