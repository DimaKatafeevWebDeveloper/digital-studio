jQuery(document).ready(function ($) {
  //анимация

  const animItems = document.querySelectorAll("._anim-items");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active");
        } else {
          if (!animItem.classList.contains("_anim-no-hide")) {
            animItem.classList.remove("_active");
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);
  }

  //слайдер
  $(window).on("load resize", function () {
    var width = $(document).width();

    if (width > 1179) {
      $(".slider .slick-initialized").slick("unslick");
    } else {
      $(".slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  });

  $(window).on("load resize", function () {
    var width = $(document).width();

    if (width > 768) {
      $(".slider-clients__container .slick-initialized").slick("unslick");
    } else {
      $(".slider-clients__container").slick({
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
      });
    }
  });

  //faq
  $("#accordion01").on("click", function () {
    $("#answer01").toggle() &&
      $(".rotate01").toggleClass("active") &&
      $(".rotate02").removeClass("active") &&
      $(".rotate03").removeClass("active") &&
      $(".rotate04").removeClass("active") &&
      $(".rotate05").removeClass("active") &&
      $(".rotate06").removeClass("active") &&
      $(".rotate07").removeClass("active") &&
      $(".rotate08").removeClass("active") &&
      $(".rotate09").removeClass("active") &&
      $(".rotate10").removeClass("active") &&
      $("#answer02").hide() &&
      $("#answer03").hide() &&
      $("#answer04").hide() &&
      $("#answer05").hide() &&
      $("#answer06").hide() &&
      $("#answer07").hide() &&
      $("#answer08").hide() &&
      $("#answer09").hide() &&
      $("#answer10").hide();
  });

  $("#accordion02").on("click", function () {
    $("#answer02").toggle() &&
      $(".rotate02").toggleClass("active") &&
      $(".rotate01").removeClass("active") &&
      $(".rotate03").removeClass("active") &&
      $(".rotate04").removeClass("active") &&
      $(".rotate05").removeClass("active") &&
      $(".rotate06").removeClass("active") &&
      $(".rotate07").removeClass("active") &&
      $(".rotate08").removeClass("active") &&
      $(".rotate09").removeClass("active") &&
      $(".rotate10").removeClass("active") &&
      $("#answer01").hide() &&
      $("#answer03").hide() &&
      $("#answer04").hide() &&
      $("#answer05").hide() &&
      $("#answer06").hide() &&
      $("#answer07").hide() &&
      $("#answer08").hide() &&
      $("#answer09").hide() &&
      $("#answer10").hide();
  });

  $("#accordion03").on("click", function () {
    $("#answer03").toggle() &&
      $(".rotate03").toggleClass("active") &&
      $(".rotate02").removeClass("active") &&
      $(".rotate01").removeClass("active") &&
      $(".rotate04").removeClass("active") &&
      $(".rotate05").removeClass("active") &&
      $(".rotate06").removeClass("active") &&
      $(".rotate07").removeClass("active") &&
      $(".rotate08").removeClass("active") &&
      $(".rotate09").removeClass("active") &&
      $(".rotate10").removeClass("active") &&
      $("#answer01").hide() &&
      $("#answer02").hide() &&
      $("#answer04").hide() &&
      $("#answer05").hide() &&
      $("#answer06").hide() &&
      $("#answer07").hide() &&
      $("#answer08").hide() &&
      $("#answer09").hide() &&
      $("#answer10").hide();
  });

  $("#accordion04").on("click", function () {
    $("#answer04").toggle() &&
      $(".rotate04").toggleClass("active") &&
      $(".rotate02").removeClass("active") &&
      $(".rotate03").removeClass("active") &&
      $(".rotate01").removeClass("active") &&
      $(".rotate05").removeClass("active") &&
      $(".rotate06").removeClass("active") &&
      $(".rotate07").removeClass("active") &&
      $(".rotate08").removeClass("active") &&
      $(".rotate09").removeClass("active") &&
      $(".rotate10").removeClass("active") &&
      $("#answer01").hide() &&
      $("#answer02").hide() &&
      $("#answer03").hide() &&
      $("#answer05").hide() &&
      $("#answer06").hide() &&
      $("#answer07").hide() &&
      $("#answer08").hide() &&
      $("#answer09").hide() &&
      $("#answer10").hide();
  });

  $("#accordion05").on("click", function () {
    $("#answer05").toggle() &&
      $(".rotate05").toggleClass("active") &&
      $(".rotate02").removeClass("active") &&
      $(".rotate03").removeClass("active") &&
      $(".rotate04").removeClass("active") &&
      $(".rotate01").removeClass("active") &&
      $(".rotate06").removeClass("active") &&
      $(".rotate07").removeClass("active") &&
      $(".rotate08").removeClass("active") &&
      $(".rotate09").removeClass("active") &&
      $(".rotate10").removeClass("active") &&
      $("#answer01").hide() &&
      $("#answer02").hide() &&
      $("#answer03").hide() &&
      $("#answer04").hide() &&
      $("#answer06").hide() &&
      $("#answer07").hide() &&
      $("#answer08").hide() &&
      $("#answer09").hide() &&
      $("#answer10").hide();
  });

  $("#accordion06").on("click", function () {
    $("#answer06").toggle() &&
      $(".rotate06").toggleClass("active") &&
      $(".rotate02").removeClass("active") &&
      $(".rotate03").removeClass("active") &&
      $(".rotate04").removeClass("active") &&
      $(".rotate05").removeClass("active") &&
      $(".rotate01").removeClass("active") &&
      $(".rotate07").removeClass("active") &&
      $(".rotate08").removeClass("active") &&
      $(".rotate09").removeClass("active") &&
      $(".rotate10").removeClass("active") &&
      $("#answer01").hide() &&
      $("#answer02").hide() &&
      $("#answer03").hide() &&
      $("#answer04").hide() &&
      $("#answer05").hide() &&
      $("#answer07").hide() &&
      $("#answer08").hide() &&
      $("#answer09").hide() &&
      $("#answer10").hide();
  });

  $("#accordion07").on("click", function () {
    $("#answer07").toggle() &&
      $(".rotate07").toggleClass("active") &&
      $(".rotate02").removeClass("active") &&
      $(".rotate03").removeClass("active") &&
      $(".rotate04").removeClass("active") &&
      $(".rotate05").removeClass("active") &&
      $(".rotate06").removeClass("active") &&
      $(".rotate01").removeClass("active") &&
      $(".rotate08").removeClass("active") &&
      $(".rotate09").removeClass("active") &&
      $(".rotate10").removeClass("active") &&
      $("#answer01").hide() &&
      $("#answer02").hide() &&
      $("#answer03").hide() &&
      $("#answer04").hide() &&
      $("#answer05").hide() &&
      $("#answer06").hide() &&
      $("#answer08").hide() &&
      $("#answer09").hide() &&
      $("#answer10").hide();
  });

  $("#accordion08").on("click", function () {
    $("#answer08").toggle() &&
      $(".rotate08").toggleClass("active") &&
      $(".rotate02").removeClass("active") &&
      $(".rotate03").removeClass("active") &&
      $(".rotate04").removeClass("active") &&
      $(".rotate05").removeClass("active") &&
      $(".rotate06").removeClass("active") &&
      $(".rotate07").removeClass("active") &&
      $(".rotate01").removeClass("active") &&
      $(".rotate09").removeClass("active") &&
      $(".rotate10").removeClass("active") &&
      $("#answer01").hide() &&
      $("#answer02").hide() &&
      $("#answer03").hide() &&
      $("#answer04").hide() &&
      $("#answer05").hide() &&
      $("#answer06").hide() &&
      $("#answer07").hide() &&
      $("#answer09").hide() &&
      $("#answer10").hide();
  });

  $("#accordion09").on("click", function () {
    $("#answer09").toggle() &&
      $(".rotate09").toggleClass("active") &&
      $(".rotate02").removeClass("active") &&
      $(".rotate03").removeClass("active") &&
      $(".rotate04").removeClass("active") &&
      $(".rotate05").removeClass("active") &&
      $(".rotate06").removeClass("active") &&
      $(".rotate07").removeClass("active") &&
      $(".rotate08").removeClass("active") &&
      $(".rotate01").removeClass("active") &&
      $(".rotate10").removeClass("active") &&
      $("#answer01").hide() &&
      $("#answer02").hide() &&
      $("#answer03").hide() &&
      $("#answer04").hide() &&
      $("#answer05").hide() &&
      $("#answer06").hide() &&
      $("#answer07").hide() &&
      $("#answer08").hide() &&
      $("#answer10").hide();
  });

  $("#accordion10").on("click", function () {
    $("#answer10").toggle() &&
      $(".rotate10").toggleClass("active") &&
      $(".rotate02").removeClass("active") &&
      $(".rotate03").removeClass("active") &&
      $(".rotate04").removeClass("active") &&
      $(".rotate05").removeClass("active") &&
      $(".rotate06").removeClass("active") &&
      $(".rotate07").removeClass("active") &&
      $(".rotate08").removeClass("active") &&
      $(".rotate09").removeClass("active") &&
      $(".rotate01").removeClass("active") &&
      $("#answer01").hide() &&
      $("#answer02").hide() &&
      $("#answer03").hide() &&
      $("#answer04").hide() &&
      $("#answer05").hide() &&
      $("#answer06").hide() &&
      $("#answer07").hide() &&
      $("#answer08").hide() &&
      $("#answer09").hide();
  });
});
