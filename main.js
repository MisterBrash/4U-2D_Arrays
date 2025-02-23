/**
 * ICS4UC - Mr. Brash 🐿️
 * 
 * Two-Dimensional Arrays
 * Practice (classwork)
 *
 * Author:
 **/

'use strict';

/**
 * Return a random integer from min to max (inclusive)
 * @param {number} min The lowest possible integer.
 * @param {number} max The highest possibe integer.
 * @returns {number} a random integer from min to max.
 */
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}



