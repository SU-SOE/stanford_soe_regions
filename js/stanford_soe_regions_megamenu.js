(function ($) {
  $(document).ready(function(){
    //Do Stuff...
    var megamenu = $('#digital-magazine-megamenu .container');
    $(megamenu).css('display', 'none');
    var topics = $('.menu-name-menu-magazine ul a').first();
    $(topics).click(function(e) {
      e.preventDefault();
      $(megamenu).slideToggle( "slow", function() {
        // Animation complete.
      });
    });
  });
})(jQuery);
