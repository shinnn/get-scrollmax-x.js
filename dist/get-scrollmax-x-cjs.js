/*!
 * get-scrollmax-x.js | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/get-scrollmax-x.js
*/
'use strict';

var getScrollMaxX;

if (typeof window.scrollMaxX === 'number') {
  getScrollMaxX = function()  {return window.scrollMaxX};
} else {
  var body = document.body, html = document.documentElement;

  var getScrollWidth = function()  {
    return body.offsetWidth ||
           html.clientWidth ||
           body.scrollWidth ||
           html.scrollWidth;
  };

  getScrollMaxX = function()  {
    return Math.max(getScrollWidth() - (html.clientWidth || body.clientWidth), 0);
  };
}

module.exports = getScrollMaxX;
