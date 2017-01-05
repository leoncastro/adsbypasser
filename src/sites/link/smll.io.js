$.register({
  rule: {
    host: /^smll\.io$/,
  },
  ready: function () {
    'use strict';

    var m = $.searchScripts(/window\.location="([^"]*)";/);
    $.openLink(m[1]);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
