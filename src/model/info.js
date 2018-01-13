const Stream = require('mithril/stream');

const Info = {
  text: Stream(''),
  targetX: Stream(-1),
  targetY: Stream(-1)
};

module.exports = Info;
