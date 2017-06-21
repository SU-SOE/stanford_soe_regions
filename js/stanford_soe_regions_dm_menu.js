(function ($) {
  $(document).ready(function(){
    $(window).resize( function() {
      var windowSize = $(window).width();
      var randi = $('#digital-magazine-menu .region-digital-magazine-menu .block-menu-block h2');
      var dm_search = $('#digital-magazine-menu .block-stanford-search-api');
      var dm_search_input = $('#digital-magazine-menu .block-stanford-search-api input[type="text"]');
      if (windowSize < 753) {
        randi.html("Research <br>& Ideas");
        var dm_height = $('#digital-magazine-menu').height();
        dm_search_input.on('click', function() {
          dm_search.css({
            'z-index' : '9999',
            'position' : 'absolute',
            'background' : '#00ECE9',
            'width' : '100%',
            'height' : dm_height
          });
        });
        dm_search_input.blur(function() {
          dm_search.css({
            'z-index' : '',
            'position' : 'relative',
            'background' : 'none',
            'width' : 'auto',
            'height' : 'auto'
          });
        });
      }
      if (windowSize > 752) {
        randi.html("Research & Ideas");
        dm_search_input.unbind();
      }
    });
  });
})(jQuery);