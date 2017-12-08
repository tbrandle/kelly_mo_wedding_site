
$('#nav-icon, .nav-link').click(function () {
  $('#nav-icon').toggleClass('open');
  $('.nav-menu').toggleClass('hidden')
});

$(".title-content").on("mouseenter", function () {
  $(this).siblings(".kiss-background").css({
        'filter': 'blur(2.5px)',
        '-webkit-filter': 'blur(2.5px)',
        '-moz-filter': 'blur(2.5px)',
        '-o-filter': 'blur(2.5px)',
        '-ms-filter': 'blur(2.5px)'
      });
  $(this).siblings(".kiss-foreground").css({
        'filter': 'blur(0px)',
        '-webkit-filter': 'blur(0px)',
        '-moz-filter': 'blur(0px)',
        '-o-filter': 'blur(0px)',
        '-ms-filter': 'blur(0px)'
      });
});

$(".title-content").on("mouseleave", function () {
  $(this).siblings(".kiss-foreground").css({
        'filter': 'blur(2.5px)',
        '-webkit-filter': 'blur(2.5px)',
        '-moz-filter': 'blur(2.5px)',
        '-o-filter': 'blur(2.5px)',
        '-ms-filter': 'blur(2.5px)'
      });
  $(this).siblings(".kiss-background").css({
        'filter': 'blur(0px)',
        '-webkit-filter': 'blur(0px)',
        '-moz-filter': 'blur(0px)',
        '-o-filter': 'blur(0px)',
        '-ms-filter': 'blur(0px)'
      });
});


$(document).ready(function () { })