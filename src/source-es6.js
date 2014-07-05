'use strict';

var getScrollMaxX;

if (typeof window.scrollMaxX === 'number') {
  getScrollMaxX = () => window.scrollMaxX;
} else {
  let {body, documentElement: html} = document;

  let getScrollWidth = () => {
    return body.offsetWidth ||
           html.clientWidth ||
           body.scrollWidth ||
           html.scrollWidth;
  };

  getScrollMaxX = () => {
    return Math.max(getScrollWidth() - (html.clientWidth || body.clientWidth), 0);
  };
}
