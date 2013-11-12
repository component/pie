
/**
 * Module dependencies.
 */

var style = require('style');

/**
 * Expose `Pie()`.
 */

module.exports = Pie;

/**
 * Initialize a new `Pie` with
 * an optional css `selector`,
 * defaulting to ".pie".
 *
 * @param {String} selector
 * @api public
 */

function Pie(selector) {
  if (!(this instanceof Pie)) return new Pie(selector);
  selector = selector || '.pie';
  this.background = style(selector, 'background-color');
  this.borderWidth = parseInt(style(selector, 'border-width'), 10);
  this.borderColor = style(selector, 'border-color');
  this.color = style(selector, 'color');
  this.size(16);
  this.angleOffset(0);
  this.innerRadius(0);
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
 * Set the start angle offset to 'angleOffset' in *radians*.
 *
 * @param {Number} angleOffset
 * @return {Pie}
 * @api public
 */
Pie.prototype.angleOffset = function(angleOffset) {
  this._angleOffset = angleOffset;
  return this;
};

/**
 * Set the inner radius to 'r', drawing a 'donut' shaped pie graph.
 *
 * @param {Number} r
 * @return {Pie}
 * @api public
 */
Pie.prototype.innerRadius = function(r) {
  this._innerRadius = r;
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
  var pi = Math.PI * 2;

  // clear
  ctx.clearRect(0, 0, size, size);

  // border
  ctx.beginPath();
  ctx.moveTo(half, half);
  ctx.arc(half, half, half, 0, pi, false);
  ctx.fillStyle = this.borderColor;
  ctx.fill();

  // background
  ctx.beginPath();
  ctx.moveTo(half, half);
  ctx.arc(half, half, half - this.borderWidth, 0, pi, false);
  ctx.fillStyle = this.background;
  ctx.fill();

  // pie
  ctx.beginPath();
  var lineWidth = half - this.borderWidth - this._innerRadius;
  ctx.arc(half, half, half - this.borderWidth - ( this._innerRadius > 0 ? ( lineWidth / 2 ) : 0 ), 0 + this._angleOffset, ( pi * n ) + this._angleOffset, false);
  if ( this._innerRadius > 0 )
  {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
  else
  {
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  return this;
};
