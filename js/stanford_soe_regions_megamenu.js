(function ($) {
  $(document).ready(function(){
    //Do Stuff...
    //var megamenu = '<div class="dm-megamenu">Yo, I\'m Stuff</div>';
    //$('#digital-magazine-megamenu').insertAfter('#fullwidth-top');$('.dm-megamenu').css('display', 'none');
    var megamenu = $('#digital-magazine-megamenu .container');
    $(megamenu).css('display', 'none');
    //TODO: hook topics link to  dropdown action
    $('.menu-name-menu-magazine ul a').first().click(function(e) {
      e.preventDefault();
      $('#digital-magazine-megamenu .container').slideToggle( "slow", function() {
        // Animation complete.
      });
    });
  });
})(jQuery);
