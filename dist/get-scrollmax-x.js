/*!
 * get-scrollmax-x.js | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/get-scrollmax-x.js
*/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.getScrollMaxX = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var getScrollMaxX;

if (typeof window.scrollMaxX === 'number') {
  getScrollMaxX = function()  {return window.scrollMaxX};
} else {
  var body = document.body, html = document.documentElement;

  var getInnerWidth;

  getInnerWidth = function()  {return html.clientWidth || body.clientWidth};

  var getScrollWidth = function()  {
    return body.offsetWidth ||
           html.clientWidth ||
           body.scrollWidth ||
           html.scrollWidth;
  };
  
  getScrollMaxX = function()  {return getScrollWidth() - getInnerWidth()};
}

return getScrollMaxX;

}));
