var test = require('tape');
var getScrollMaxX = require('./dist/get-scrollmax-x.js');

var body = document.body;
body.style.margin = '0';
body.style.padding = '0';
body.style.width = '0';

test('window.scrollMaxX', function(t) {
  'use strict';

  t.plan(3);

  t.equal(
    getScrollMaxX(),
    0,
    'should return 0 when the content is enough small.'
  );

  body.style.width = '9999px';
  var _s = getScrollMaxX();
  
  t.ok(
    _s > 0,
    'should return positive number when the content is enough large.'
  );
  
  body.style.width = parseInt(body.style.width, 10) + 1 + - _s + 'px';
  t.equal(
    getScrollMaxX(),
    1,
    'should return scrollable width of current page.'
  );
});
