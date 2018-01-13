const m = require('mithril');

const Info = require('../model/info.js');
const Settings = require('../model/settings.js');

class Cell {
  constructor(vnode) {
    this.height = 16;
    this.width = 16;
    this.row = vnode.attrs.row;
    this.column = vnode.attrs.column;
  }
  view(vnode) {
    const isActive = (this.row === Info.targetX() && this.column === Info.targetY());
    return m(`.cell#column-${this.column}`, {
      onclick: () => {
        Info.text(makeText(this));
        Info.targetX(this.row);
        Info.targetY(this.column);
      },
      class: `${isActive ? 'is-active' : ''}`
    }, '');
  }
}

function makeText({row, column, width, height}) {
  let x = row * width + width / 2 * Settings.xPosition();
  let y = column * height + height / 2 * Settings.yPosition();
  return `${row}, ${column} (${x}px, ${y}px)`;
}

module.exports = Cell;
