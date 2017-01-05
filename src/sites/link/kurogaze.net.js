$.register({
  rule: {
    host: /^st\.kurogaze\.net$/,
    query: /r=(.+)/,
  },
  start: function (m) {
    'use strict';

    var r = atob(m.query[1]);
    $.openLink(r);
  },
});

$.register({
  rule: {
    host: /^st\.kurogaze\.net$/,
  },
  ready: function () {
    'use strict';

    var a = $('a.redirect');
    $.openLink(a.href);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
