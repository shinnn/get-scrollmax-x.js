'use strict';

var getScrollMaxX;

if (typeof window.scrollMaxX === 'number') {
  getScrollMaxX = () => window.scrollMaxX;
} else {
  let {body, documentElement: html} = document;

  let getInnerWidth;

  getInnerWidth = () => html.clientWidth || body.clientWidth;

  let getScrollWidth = () => {
    return body.offsetWidth ||
           html.clientWidth ||
           body.scrollWidth ||
           html.scrollWidth;
  };
  
  getScrollMaxX = () => getScrollWidth() - getInnerWidth();
}
