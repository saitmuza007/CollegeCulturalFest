(function ($) {
  "use strict";


  

  $(window).on('load', function () {
    if ($(".pre-loader-wrap").length > 0) {
      $(".pre-loader-wrap").fadeOut("slow");
    }
  });


  
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".scroll-top").fadeIn(600);
    } else {
      $(".scroll-top").fadeOut(600);
    }
  });

  $(".scroll-top").on("click", function () {
    $("html,body").animate({
        scrollTop: 0
      },
      500
    );
    return false;
  });




  $('#dopeNav').dopeNav();

  
  $(".portfolio-carusel-wrap").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 15,
    responsive: {
      1200: {
        items: 4
      },
      1199: {
        items: 3
      }
    }
  });


  

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function () {
    $('.odometer').each(function () {
      if ($(this).isInViewport()) {
        setTimeout(function () {
          $('.odometer_number_one').html('250');
          $('.odometer_number_two').html('120');
          $('.odometer_number_three').html('210');
          $('.odometer_number_four').html('390');
        }, 5);
      } else {}
    });
  });

  

  $('.single-service').tilt({
    speed: 3000, // Speed of the enter/exit transition.
    transition: true, // Set a transition on enter/exit.
    scale: 1.06
  })

  

  $(".testimonial-carousel").owlCarousel({
    items: 2,
    loop: true,
    margin: 15,
    nav: true,
    slideSpeed: 1200,
    smartSpeed: 500,
    autoplay: false,
    navText: [
      '<i class="icofont-arrow-left"></i>',
      '<i class="icofont-arrow-right"></i>'
    ],
    navContainer: '#leftNav',
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      }
    }

  });




  

  $(".brand-logo-carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    items: 6,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });



  $(".portfolio-carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    items: 1,
    autoplay: true,
    dots: true,
  });

  
  $(".filter-button").on('click', function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      $('.filter').show('1000');
    } else {
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');

    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }

  $(this).addClass("active");

  $('.filter-list li').on('click', function (e) {
    e.preventDefault();
    $('li').removeClass('active');
    $(this).addClass('active');
  });



  

  var submitContact = $("#submit-message"),
    message = $("#msg");

  submitContact.on("click", function (e) {
    e.preventDefault();

    var $this = $(this);

    $.ajax({
      type: "POST",
      url: "mail.php",
      dataType: "json",
      cache: false,
      data: $("#contact-form").serialize(),
      success: function (data) {
        if (data.info !== "error") {
          $this
            .parents("form")
            .find("input[type=text],input[type=email],textarea,select")
            .filter(":visible")
            .val("");
          message
            .hide()
            .removeClass("success")
            .removeClass("error")
            .addClass("success")
            .html(data.msg)
            .fadeIn("slow")
            .delay(1000)
            .fadeOut("slow");
        } else {
          message
            .hide()
            .removeClass("success")
            .removeClass("error")
            .addClass("error")
            .html(data.msg)
            .fadeIn("slow")
            .delay(1000)
            .fadeOut("slow");
        }
      }
    });
  });

})(jQuery);