const Stream = require('mithril/stream');

const choiceList = {
  start: 0,
  center: 1,
  end: 2
};

const Settings = {
  xPosition: Stream(choiceList.center),
  yPosition: Stream(choiceList.center),
  choiceList: choiceList
};

module.exports = Settings;
