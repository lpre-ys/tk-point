const m = require('mithril');

const Model = require('../model/settings');

const xLabelList = ['左', '中央', '右'];
const yLabelList = ['上', '中央', '下'];

const Settings = {
  view: function () {
    return m('.settings', [
      m('h3', 'Settings'),
      m('.wrapper', [
        m('h4', '横位置:'),
        Object.keys(Model.choiceList).map((key) => {
          const v = Model.choiceList[key];
          return [
            m('input[type=radio]', {
              value: v,
              name: 'x-position',
              id: `x-position-${v}`,
              checked: Model.xPosition() === v,
              onchange: m.withAttr('checked', (flag) => {
                if (flag) {
                  Model.xPosition(v);
                }
              })
            }, ''),
            m('label', {for: `x-position-${v}`}, xLabelList[v])
          ];
        })
      ]),
      m('.wrapper', [
        m('h4', '縦位置:'),
        Object.keys(Model.choiceList).map((key) => {
          const v = Model.choiceList[key];
          return [
            m('input[type=radio]', {
              value: v,
              name: 'y-position',
              id: `y-position-${v}`,
              checked: Model.yPosition() === v,
              onchange: m.withAttr('checked', (flag) => {
                if (flag) {
                  Model.yPosition(v);
                }
              })
            }, ''),
            m('label', {for: `y-position-${v}`}, yLabelList[v])
          ];
        })
      ])
    ]);
  }
};

module.exports = Settings;
