/**
 * Utility - a tiny library of common DOM manipulation methods
 *
 */

;(function (global) {
  'use strict';

  var Utility = Utility || {};

  // Check if element has a class
  Utility.hasClass = function (el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  };

  // Add a class to element
  Utility.addClass = function (el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  };

  // Remove a class from element
  Utility.removeClass = function (el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^| )' + className.split(' ').join('|') + '( |$)', 'gi'), ' ');
    }
  };

  // Toggle a class on element
  Utility.toggleClass = function (el, className) {
    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);
      if (existingIndex >= 0) {
        classes.splice(existingIndex, 1);
      } else {
        classes.push(className);
      }
      el.className = classes.join(' ');
    }
  };

  // Expose Utility to the global object
  global.Utility = Utility;

})(this);
