
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
  this.border = parseInt(style('.pie', 'border-width'), 10);
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
  ctx.clearRect()
  return this;
};
