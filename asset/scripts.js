;(function($) {
  "use strict";

   $(document).ready(function(){
/*----------------------------- Navigations --------------------------*/
//Navigation For Index1
  $('#open-nav ').click(function () {
      if ($(this).hasClass('fa fa-bars')) {
          $(this).removeClass('ffa fa-bars').addClass('fa fa-times');
          $('#navs').addClass('open-navs').slideDown('.navone');
          $(this).removeClass('nav-half').addClass('nav-full');
          $('.nav-menu').show();
      } else {
          $(this).removeClass('fa fa-times').addClass('fa fa-bars');
          $(this).removeClass('nav-full').addClass('nav-half');
          $('#navs').removeClass('open-navs').slideUp('.navone');
          $('.nav-menu').hide();
      }
  });

//Navigation For Index2
  // $('#navs').onePageNav({
  //   currentClass: 'active',
  //   filter: ':not(.external)',
  //   scrollThreshold: 0.25,
  //   scrollOffset: 0
  // });

//Sticky Navigation
  $(".main-menu-continer").sticky({ topSpacing: 0 });

//Responsive Nav
  $( "ul.sub-menu").parent().append("<span class='toggle_nav_button'>+</span>");
    $(".toggle_nav_button").click(
          function(){
            var link = $(this);
            $(this).parent().find("ul.sub-menu").slideToggle('fast', function(){
              if ($(this).is(':visible')){
                link.text('-');
              } else {
                link.text('+');
              }
      });
      return false;
  });


//Responsive Nav
  $('.nav a.colapse-menu1').click(function () { $(".navbar-collapse").collapse("hide") });
  $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });

//Smoothscroll
      smoothScroll.init({
          speed: 200
      });

 /*----------------------------- Scroll To Top--------------------------*/
             var scrollTimeout;

            $('a.scroll-top').click(function(){
                $('html,body').animate({scrollTop:0},500);
                return false;
            });

            $(window).scroll(function(){
                clearTimeout(scrollTimeout);
                if($(window).scrollTop()>400){
                    scrollTimeout = setTimeout(function(){$('a.scroll-top:hidden').fadeIn()},100);
                }
                else{
                    scrollTimeout = setTimeout(function(){$('a.scroll-top:visible').fadeOut()},100);
            }
            });


/*----------------------------- Skill Chart --------------------------*/
  $('.chart').easyPieChart({
        animate: 2000,
        lineWidth: 13,
        barColor: '#e74c3c',
        lineCap: 'square',
        scaleColor: false,
        trackColor: '#e6e8ed',
        size: 170
  });

/*----------------------------- Animated Counter --------------------------*/
  $('.count').each(function () {
    $(".total-numbers .sum").appear(function() {
    var counter = $(this).html();
    $(this).countTo({
      from: 0,
      to: counter,
      speed: 2000,
      refreshInterval: 60,
      });
    });
  });




   });

    $(window).load(function(){
/*----------------------------- Loader & Parallax --------------------------*/
//Page Preloader
      $(".loader-item").delay(700).fadeOut();
      $(".mask").delay(800).fadeOut("slow");
        parallaxInit();




    });

//Parallax
  function parallaxInit() {
    $('#home').parallax("30%", 0.1);
    $('#status').parallax("30%", 0.1);
    $('#wprocess').parallax("30%", 0.1);
    $('#hire').parallax("30%", 0.1);
    $('#qoutes').parallax("30%", 0.1);
    //$('#parallax-1').parallax("30%", 0.1);
    //$('#parallax-2').parallax("30%", 0.1);
    /*add as necessary*/
  }

})(jQuery);
