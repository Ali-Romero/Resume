//slider
$(document).ready(function () {
  $('.js-slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    speed: 900,
    initialSlide: 1,
    cssEase: 'ease-in-out',
    prevArrow: $('.slider__arrow-left'),
    nextArrow: $('.slider__arrow-right'),
    appendDots: $('.slider__dots'),
  });
});

//sidebar
$(document).ready(function () {
  $('.sidebar__border-active').click(function () {
    $('.sidebar').toggleClass('close');
  });
  $('.sidebar__border-active').click(function () {
    $('.arrow').toggleClass('active-sidebar');
  });
  $('.sidebar__border-active').click(function () {
    $('.sidebar__layout').toggleClass('stop-anim');
  });
  $('.sidebar__border-active').click(function () {
    $('.logo').toggleClass('active-logo');
  });
});

// dropdown
$('.js-dropdown').click(function () {
  $(this).next().slideToggle(400);
  $(this).toggleClass('trigger');
});

// pageScroll & navigation menu
jQuery(function ($) {

    const section = $('.section'),
      nav = $('ul'),
      navHeight = nav.outerHeight();

  window.addEventListener('orientationchange', function () {
      navHeight == nav.outerHeight();
  },false);

  $(window).on('scroll', function () {
      const position = $(this).scrollTop();

      section.each(function () {
          const top = $(this).offset().top - 170
                bottom = top + $(this).outerHeight();

          if (position >= top && position <= bottom) {
              nav.find('a').removeClass('active-link');
              section.removeClass('active-link');
              
              $(this).addClass('active-link');
              nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-link');
          }
      });
  });

    nav.find('a').on('click', function () {
      const id = $(this).attr('href');

      $('html, body').animate({
          scrollTop: $(id).offset().top - 110
      }, 700);

      return false;
  });

});

//ScrollTopPage
$(document).ready(function(){
$(".menu-top").click(function () {
  $('html, body').animate({
      scrollTop: 0
  }, 900);
  });
});

//form
window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("my-form");
  var status = document.getElementById("status");
  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Спасибо, форма отправлена!";
  }
  function error() {
    status.classList.add("error");
    status.innerHTML = "Ой,произошла ошибка!";
  }
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
