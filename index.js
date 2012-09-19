
/**
 * Module dependencies.
 */

var style = require('style');

/**
 * Expose `Pie()`.
 */

module.exports = Pie;

/**
 * Initialize a new `Pie`.
 *
 * @api public
 */

function Pie() {
  if (!(this instanceof Pie)) return new Pie;
  this.background = style('.pie', 'background-color');
  this.borderWidth = parseInt(style('.pie', 'border-width'), 10);
  this.borderColor = style('.pie', 'border-color');
  this.color = style('.pie', 'color');
  this.size(16);
}

/**
 * Update percentage to `n`.
 *
 * @param {Number} n
 * @return {Pie}
 * @api public
 */

Pie.prototype.update = function(n){
  this.percent = n;
  return this;
};

/**
 * Set size to `n`.
 *
 * @param {Number} n
 * @return {Pie}
 * @api public
 */

Pie.prototype.size = function(n){
  this._size = n;
  return this;
};

/**
 * Draw on to `ctx`.
 *
 * @param {CanvasContext2d} ctx
 * @return {Pie}
 * @api public
 */

Pie.prototype.draw = function(ctx){
  var size = this._size;
  var half = size / 2;
  var n = this.percent / 100;

  // background
  ctx.clearRect(0, 0, size, size);
  ctx.beginPath();
  ctx.moveTo(half, half);
  ctx.arc(half, half, half, 0, Math.PI * 2, false);
  ctx.fillStyle = this.background;
  ctx.fill();

  // border
  ctx.strokeStyle = this.borderColor;
  ctx.lineWidth = this.borderWidth;
  ctx.stroke();

  // pie
  ctx.beginPath();
  ctx.moveTo(half, half);
  ctx.arc(half, half, half, 0, Math.PI * n, false);
  ctx.fillStyle = this.color;
  ctx.fill();

  return this;
};
