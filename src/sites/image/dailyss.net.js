$.register({
  rule: {
    host: [
      /^dailyss\.net$/,
      /daily-img\.com$/,
      /img-365\.com$/,
      /^365-img\.com$/,
      /^i\.hentai-ddl\.org$/,
    ],
    path: /^\/image\/.+$/,
  },
  ready: function () {
    'use strict';

    var i = $('#image-viewer-container img');
    $.openImage(i.src);
  },
});

$.register({
  rule: {
    host: /^xxx\.porn0day.\.com$/,
    path: /^\/image\/.+$/,
  },
  ready: function () {
    'use strict';

    // the URL in img is a thumbnail
    var i = $('link[rel^=image_src]');
    $.openImage(i.href);
  },
});

// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
