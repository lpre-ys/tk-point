const m = require('mithril');

const Model = require('../model/info.js');

class Info {
  view(vnode) {
    return m('.info', [
      m('h3', 'Point:'),
      m('p.text', Model.text())
    ]);
  }
}

module.exports = Info;
