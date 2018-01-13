const m = require('mithril');
const Map = require('./map.js');
const Info = require('./info.js');

const Main = {
  row: 15,
  column: 20,
  view: function () {
    return m('.main', [
      m(Info),
      m(Map),
    ]);
  }
};

module.exports = Main;
