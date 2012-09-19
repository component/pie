
/**
 * Module dependencies.
 */

var style = require('style');

/**
 * Expose `pie()`.
 */

module.exports = pie;

/**
 * Draw a pie on `ctx` with the given `percent` filled.
 *
 * @param {CanvasContext2d} ctx
 * @param {Number} percent
 * @api public
 */

function pie(ctx) {
  var background = style('.pie', 'background-color');
  var border = style('.pie', 'border-width');
  var color = style('.pie', 'color');
}