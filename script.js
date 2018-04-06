
$(document).ready(function () {
    var counter = 0;
    // Start the changing images
    var interval = setInterval(function () {
      if (counter == 9) {
        counter = 0;
      }   
      changeImage(counter);
      counter++;
    }, 3000);
    
    // Set the percentage off
  loading(interval);
});

function changeImage(counter = 0) {
  var images = [
    '<img class="icon" src="images/pine.svg"></img>',
    '<img class="icon" src="images/yoga.svg"></img>',
    '<img class="icon" src="images/skier.svg"></img>',
  ];

  $(".loader .image").html("" + images[counter] + "");
}

function loading(interval) {
  var num = 0;

  for (i = 0; i <= 100; i++) {
    setTimeout(function () {
      $('.loader span').html(num + '%');

      if (num == 100) {
        // loading();
        $('.loader-container').fadeOut()
        clearInterval(interval)
      }
      num++;
    }, i * 120);
  };

}

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

});
        
$(".kiss-foreground").on("mouseleave", function () {
          
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

$(window).resize(function () {
  if($(window).width() < 800){
    $('#kiss-foreground').removeClass('kiss-foreground');
  } else {
    $('#kiss-foreground').addClass('kiss-foreground');
  }
});