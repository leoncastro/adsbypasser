(function () {
  'use strict';

  function run () {
    var i = $('#image');
    $.openImage(i.src);
  }

  $.register({
    rule: {
      host: /^(www\.)?image(pearl|beryl|crest)\.com$/,
      path: /^\/verify\/(.+)$/,
    },
    start: function (m) {
      $.openLink('/view/' + m.path[1]);
    },
  });

  $.register({
    rule: [
      'http://*.abload.de/image.php?img=*',
      'http://www.imageup.ru/*/*/*.html',
      // different layout same handler
      'http://itmages.ru/image/view/*/*',
      // different layout same handler
      {
        host: /^(www\.)?image(pearl|beryl|crest)\.com$/,
        path: /^\/view\//,
      },
    ],
    ready: run,
  });

})();

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
