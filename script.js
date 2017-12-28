
$('#nav-icon, .nav-link').click(function () {
  $('#nav-icon').toggleClass('open');
  $('.nav-menu').toggleClass('hidden')
});

$(".kiss-foreground").on("mouseenter", function () {
  $(this).siblings(".kiss-background").css({
        'filter': 'blur(3px)',
        '-webkit-filter': 'blur(3px)',
        '-moz-filter': 'blur(3px)',
        '-o-filter': 'blur(3px)',
        '-ms-filter': 'blur(3px)',
          '-webkit-transform': 'translateZ(0) scale(1.0, 1.0)',
  'transform': 'translateZ(0)',
      });
  $(this).css({
        'filter': 'blur(0px)',
        '-webkit-filter': 'blur(0px)',
        '-moz-filter': 'blur(0px)',
        '-o-filter': 'blur(0px)',
        '-ms-filter': 'blur(0px)',
          '-webkit-transform': 'translateZ(0) scale(1.0, 1.0)',
  'transform': 'translateZ(0)',
      });
  // $(this).css({
  //       'filter': 'blur(2.7px)',
  //       '-webkit-filter': 'blur(2.7px)',
  //       '-moz-filter': 'blur(2.7px)',
  //       '-o-filter': 'blur(2.7px)',
  //       '-ms-filter': 'blur(2.7px)'
  //     });
});
        
$(".kiss-foreground").on("mouseleave", function () {
          
  // $(this).css({
  //       'filter': 'blur(0px)',
  //       '-webkit-filter': 'blur(0px)',
  //       '-moz-filter': 'blur(0px)',
  //       '-o-filter': 'blur(0px)',
  //       '-ms-filter': 'blur(0px)'
  //     });
  $(this).css({
        'filter': 'blur(2.7px)',
        '-webkit-filter': 'blur(2.7px)',
        '-moz-filter': 'blur(2.7px)',
        '-o-filter': 'blur(2.7px)',
        '-ms-filter': 'blur(2.7px)',
          '-webkit-transform': 'translateZ(0) scale(1.0, 1.0)',
  'transform': 'translateZ(0)',
      });
  $(this).siblings(".kiss-background").css({
        'filter': 'blur(0px)',
        '-webkit-filter': 'blur(0px)',
        '-moz-filter': 'blur(0px)',
        '-o-filter': 'blur(0px)',
        '-ms-filter': 'blur(0px)',
        '-webkit-transform': 'translateZ(0) scale(1.0, 1.0)',
       'transform': 'translateZ(0)',
      });
});


