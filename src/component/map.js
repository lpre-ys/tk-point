const m = require('mithril');

const Cell = require('./cell.js');

const params = {
  row: 15,
  column: 20
};

const Map = {
  view: function () {
    const map = [];
    for (let i = 0; i < params.row; i++) {
      const cells = [];
      for (let j = 0; j < params.column; j++) {
        cells.push(m(Cell, {row: i, column: j}));
      }
      map[i] = m(`.row#row-${i}`, cells);
    }
    return m('.wrapper', [
      m('h3', 'Map'), m('.map', map)
    ]);
  }
};


module.exports = Map;
