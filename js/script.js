$(document).ready(function($){
  $('.aniview').AniView();
  var num = $('.num span').text();
  var w = num/100;
//  alert(w);
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $('.activity').offset().top ) {
      $('.progress-bar').css('width', w+'%');
    } 
  })  
  
  $out();
  setInterval(function(){
    $out();
  },5000)


  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("canvas.snow").let_it_snow({
      windPower:2,
      speed:-1,
      //        color: "#ffffff",
      size:3,
      count: 80,
      image: "images/fire.png",
      opacity: 0
    });

  }else{
    $("canvas.snow").let_it_snow({
      windPower: 2,
      speed:-1,
      //        color: "#ffffff",
      size:1,
      count: 40,
      image: "images/fire.png",
      opacity: 0
    });

  }

  function $out() {
    $('h1.tit div').removeClass('out').each(function(index){
      $(this).delay(index*100).animate({
        'background':'transparent'
      },0,function(){
        $(this).addClass('out')
      })
    })
  }


});
