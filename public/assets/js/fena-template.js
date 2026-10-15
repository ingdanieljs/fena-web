/*
 * FENA - JS de la plantilla adaptado a Nuxt.
 * initGlobal(): una sola vez (cursor, scroll, preloader).
 * initPage():   en cada navegación, sobre el DOM de la página actual.
 * Lo llama app/plugins/template.client.js
 */
(function ($) {
  "use strict";

  gsap.registerPlugin(ScrollTrigger, SplitText);
  gsap.config({
    nullTargetWarn: false,
    trialWarn: false
  });

  // ===Portfolio===
  function projectMasonaryLayout() {
    if ($(".masonary-layout").length) {
      $(".masonary-layout").isotope({
        layoutMode: "masonry"
      });
    }
    if ($(".post-filter").length) {
      $(".post-filter li")
        .children(".filter-text")
        .on("click", function () {
          var Self = $(this);
          var $parentLi = Self.parent();
          var selector = $parentLi.attr("data-filter");
          $(".post-filter li").removeClass("active");
          $parentLi.addClass("active");
          $(".filter-layout").isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false
            }
          });
          return false;
        });
    }

    if ($(".post-filter.has-dynamic-filters-counter").length) {
      // var allItem = $('.single-filter-item').length;
      var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
        "li"
      );
      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this)
          .children(".filter-text")
          .append('<span class="count">' + count + "</span>");
      });
    }
  }



  function handleScrollbar() {
    const bodyHeight = $("body").height();
    const scrollPos = $(window).innerHeight() + $(window).scrollTop();
    let percentage = (scrollPos / bodyHeight) * 100;
    if (percentage > 100) {
      percentage = 100;
    }
    $(".scroll-to-top .scroll-to-top__inner").css("width", percentage + "%");
  }

  function title_animation() {
    var tg_var = jQuery('.sec-title-animation');
    if (!tg_var.length) {
      return;
    }
    const quotes = document.querySelectorAll(".sec-title-animation .title-animation");

    quotes.forEach(quote => {

      //Reset if needed
      if (quote.animation) {
        quote.animation.progress(1).kill();
        quote.split.revert();
      }

      var getclass = quote.closest('.sec-title-animation').className;
      var animation = getclass.split('animation-');
      if (animation[1] == "style4") return

      quote.split = new SplitText(quote, {
        type: "lines,words,chars",
        linesClass: "split-line"
      });
      gsap.set(quote, {
        perspective: 400
      });

      if (animation[1] == "style1") {
        gsap.set(quote.split.chars, {
          opacity: 0,
          y: "90%",
          rotateX: "-40deg"
        });
      }
      if (animation[1] == "style2") {
        gsap.set(quote.split.chars, {
          opacity: 0,
          x: "50"
        });
      }
      if (animation[1] == "style3") {
        gsap.set(quote.split.chars, {
          opacity: 0,
        });
      }
      quote.animation = gsap.to(quote.split.chars, {
        scrollTrigger: {
          trigger: quote,
          start: "top 90%",
        },
        x: "0",
        y: "0",
        rotateX: "0",
        opacity: 1,
        duration: 1,
        ease: Back.easeOut,
        stagger: .02
      });
    });
  }

  // ===Price Filter===
  function priceFilter() {
    if ($(".price-ranger").length) {
      var $priceRange = $(".price-ranger #slider-range");
      var $minInput = $(".price-ranger .ranger-min-max-block .min");
      var $maxInput = $(".price-ranger .ranger-min-max-block .max");
      $priceRange.slider({
        range: true,
        min: 0,
        max: 5000,
        values: [0, 3000],
        slide: function (event, ui) {
          $minInput.val("" + ui.values[0]);
          $maxInput.val("" + ui.values[1]);
        },
      });
      $minInput.val("" + $priceRange.slider("values", 0));
      $maxInput.val("" + $priceRange.slider("values", 1));
    }
  }



  $(".add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $(".sub").on("click", function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
  });







  var aosReady = false;
  var wowInstance = null;

  function initGlobal() {
    // Preloader
    if (document.readyState === "complete") {
      $(".js-preloader").delay(200).fadeOut(300);
    } else {
      $(window).on("load", function () {
        $(".js-preloader").delay(200).fadeOut(300);
      });
    }

    // Custom cursor
    if ($(".custom-cursor").length) {
      var cursor = document.querySelector(".custom-cursor__cursor");
      var cursorinner = document.querySelector(".custom-cursor__cursor-two");

      $(document).on("mousemove", function (e) {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        cursorinner.style.left = e.clientX + "px";
        cursorinner.style.top = e.clientY + "px";
      });
      $(document).on("mousedown", function () {
        cursor.classList.add("click");
        cursorinner.classList.add("custom-cursor__innerhover");
      });
      $(document).on("mouseup", function () {
        cursor.classList.remove("click");
        cursorinner.classList.remove("custom-cursor__innerhover");
      });
      $(document).on("mouseover", "a", function () {
        cursor.classList.add("custom-cursor__hover");
      });
      $(document).on("mouseleave", "a", function () {
        cursor.classList.remove("custom-cursor__hover");
      });
    }

    // Sticky header + barra de progreso del scroll-to-top
    $(window).on("scroll", function () {
      var stricky = $(".stricked-menu");
      if (stricky.length) {
        stricky.toggleClass("stricky-fixed", $(window).scrollTop() > 300);
      }
      handleScrollbar();
      $(".scroll-to-top").toggleClass("show", $(window).scrollTop() > 500);
    });

    ScrollTrigger.addEventListener("refresh", title_animation);
  }

  function initPage() {
    // Limpia animaciones de la página anterior
    ScrollTrigger.getAll().forEach(function (t) { t.kill(); });

    if ($("[data-aos]").length) {
      if (!aosReady) {
        AOS.init({ duration: "1200", easing: "ease", mirror: true });
        aosReady = true;
      } else {
        AOS.refreshHard();
      }
    }

    if ($(".wow").length) {
      if (!wowInstance) {
        wowInstance = new WOW({ boxClass: "wow", animateClass: "animated", mobile: true, live: true });
        wowInstance.init();
      } else {
        wowInstance.sync();
      }
    }

    // ===Datepicker===
    if ($("#datepicker").length) {
      $("#datepicker").datepicker();
    }



    // Main Slider One
    if ($(".main-slider__carousel").length > 0) {
      const MainSliderCarousel = new Swiper('.main-slider__carousel', {
        "slidesPerView": 1,
        "spaceBetween": 0,
        "effect": 'fade',
        "speed": 600,
        "loop": true,
        "pagination": {
          "el": "#main-slider-pagination",
          "type": "bullets",
          "clickable": true
        },

        "navigation": {
          "nextEl": "#main-slider__swiper-button-next",
          "prevEl": "#main-slider__swiper-button-prev"
        },
        "autoplay": {
          "delay": 8000
        },
        "breakpoints": {
          "0": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "375": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "575": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "768": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "992": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "1200": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "1320": {
            "spaceBetween": 0,
            "slidesPerView": 1
          }
        },
      });
    }

    // Main Slider Two
    if ($(".main-slider-two__carousel").length > 0) {
      const MainSliderTwoCarousel = new Swiper('.main-slider-two__carousel', {
        "slidesPerView": 1,
        "spaceBetween": 0,
        "effect": 'fade',
        "speed": 600,
        "loop": true,
        "pagination": {
          "el": "#main-slider-two-pagination",
          "type": "bullets",
          "clickable": true
        },

        "navigation": {
          "nextEl": "#main-slider-two__swiper-button-next",
          "prevEl": "#main-slider-two__swiper-button-prev"
        },
        "autoplay": {
          "delay": 8000
        },
        "breakpoints": {
          "0": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "375": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "575": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "768": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "992": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "1200": {
            "spaceBetween": 0,
            "slidesPerView": 1
          },
          "1320": {
            "spaceBetween": 0,
            "slidesPerView": 1
          }
        },
      });
    }


    // Banner Two Carousel
    if ($(".banner-two__carousel").length > 0) {
      const swiper = new Swiper('.banner-two__carousel', {
        "slidesPerView": 1,
        "spaceBetween": 0,
        "speed": 600,
        "loop": true,
        "pagination": {
          "el": ".banner-two-dot-style1",
          "type": "bullets",
          "clickable": true
        },

        "navigation": {
          "nextEl": ".swiper-button-prev1",
          "prevEl": ".swiper-button-next1"
        },
        "autoplay": {
          "delay": 6000
        },
        "breakpoints": {
          "0": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "375": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "575": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "768": {
            "spaceBetween": 30,
            "slidesPerView": 1
          },
          "992": {
            "spaceBetween": 30,
            "slidesPerView": 1
          },
          "1200": {
            "spaceBetween": 30,
            "slidesPerView": 1
          },
          "1320": {
            "spaceBetween": 30,
            "slidesPerView": 1
          }
        },
      });
    }



    // ===Courses One Carousel===
    if ($(".courses-one__carousel").length) {
      $(".courses-one__carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 600,
        autoplay: false,
        autoplayTimeout: 6000,
        navText: [
          '<span class="icon-back"></span>',
          '<span class="icon-next"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 4,
          },
          1320: {
            items: 4,
          },
        },
      });
    }

    // ===Courses One Carousel===
    if ($(".testimonial-one__carousel").length) {
      $(".testimonial-one__carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        smartSpeed: 600,
        autoplay: false,
        autoplayTimeout: 6000,
        navText: [
          '<span class="icon-back"></span>',
          '<span class="icon-next"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          992: {
            items: 1,
          },
          1200: {
            items: 1,
          },
          1320: {
            items: 1,
          },
        },
      });
    }

    // Research One
    if ($(".research-one__carousel").length > 0) {
      const swiper = new Swiper('.research-one__carousel', {
        "slidesPerView": 3,
        "spaceBetween": 0,
        "speed": 600,
        "loop": true,
        "pagination": {
          "el": ".research-one-dot-style1",
          "type": "bullets",
          "clickable": true
        },

        "navigation": {
          "nextEl": ".swiper-button-prev1",
          "prevEl": ".swiper-button-next1"
        },
        "autoplay": {
          "delay": 6000
        },
        "breakpoints": {
          "0": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "375": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "575": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "768": {
            "spaceBetween": 30,
            "slidesPerView": 2
          },
          "992": {
            "spaceBetween": 30,
            "slidesPerView": 3
          },
          "1200": {
            "spaceBetween": 30,
            "slidesPerView": 3
          },
          "1320": {
            "spaceBetween": 30,
            "slidesPerView": 3
          }
        },
      });
    }

    //Testimonial Two Carousel
    if ($(".testimonial-two__carousel").length) {
      $(".testimonial-two__carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: [
          '<span class="far fa-chevron-right" aria-hidden="true"></span><span class="visually-hidden">Testimonio anterior</span>',
          '<span class="far fa-chevron-right" aria-hidden="true"></span><span class="visually-hidden">Testimonio siguiente</span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 2,
          },
          1200: {
            items: 3,
          },
          1320: {
            items: 3,
          },
        },
      });
    }

    // Activities One
    if ($(".activities-one__carousel").length > 0) {
      const swiper = new Swiper('.activities-one__carousel', {
        "slidesPerView": 3,
        "spaceBetween": 0,
        "speed": 600,
        "loop": true,
        "pagination": {
          "el": ".activities-one-dot-style1",
          "type": "bullets",
          "clickable": true
        },

        "navigation": {
          "nextEl": ".swiper-button-prev1",
          "prevEl": ".swiper-button-next1"
        },
        "autoplay": {
          "delay": 6000
        },
        "breakpoints": {
          "0": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "375": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "575": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "768": {
            "spaceBetween": 30,
            "slidesPerView": 1
          },
          "992": {
            "spaceBetween": 30,
            "slidesPerView": 2
          },
          "1200": {
            "spaceBetween": 30,
            "slidesPerView": 3
          },
          "1320": {
            "spaceBetween": 30,
            "slidesPerView": 3
          }
        },
      });
    }

    // Testimonial Three
    if ($(".testimonial-three__carousel").length > 0) {
      const swiper = new Swiper('.testimonial-three__carousel', {
        "slidesPerView": 3,
        "spaceBetween": 0,
        "speed": 600,
        "loop": true,
        "pagination": {
          "el": ".testimonial-three-dot-style1",
          "type": "bullets",
          "clickable": true
        },

        "navigation": {
          "nextEl": ".swiper-button-prev1",
          "prevEl": ".swiper-button-next1"
        },
        "autoplay": {
          "delay": 6000
        },
        "breakpoints": {
          "0": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "375": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "575": {
            "spaceBetween": 20,
            "slidesPerView": 1
          },
          "768": {
            "spaceBetween": 20,
            "slidesPerView": 2
          },
          "992": {
            "spaceBetween": 20,
            "slidesPerView": 3
          },
          "1200": {
            "spaceBetween": 20,
            "slidesPerView": 3
          },
          "1320": {
            "spaceBetween": 20,
            "slidesPerView": 3
          }
        },
      });
    }

    //Testimonial Four Carousel
    if ($(".testimonial-four__carousel").length) {
      $(".testimonial-four__carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: [
          '<span class="icon-next"></span>',
          '<span class="icon-next"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          992: {
            items: 2,
          },
          1320: {
            items: 3,
          },
        },
      });
    }

    // ===Footer four Carousel===
    if ($(".footer-widget-four__twitter-feed-carousel").length) {
      $(".footer-widget-four__twitter-feed-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        smartSpeed: 500,
        autoplay: false,
        autoplayTimeout: 7000,
        navText: [
          '<span class="icon-left-arrow"></span>',
          '<span class="icon-right-arrow"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          992: {
            items: 1,
          },
          1200: {
            items: 1,
          },
          1320: {
            items: 1,
          },
        },
      });
    }

    //Brand Two Carousel
    if ($(".brand-two__carousel").length) {
      $(".brand-two__carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: [
          '<span class="icon-left-arrow"></span>',
          '<span class="icon-left-arrow right-arrow"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 3,
          },
          992: {
            items: 4,
          },
          1200: {
            items: 5,
          },
          1320: {
            items: 7,
          },
        },
      });
    }

    //Related Event Carousel
    if ($(".related-event__carousel").length) {
      $(".related-event__carousel").owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: [
          '<span class="icon-circle-rightsvg"></span>',
          '<span class="icon-circle-left"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 2,
          },
          1200: {
            items: 3,
          },
          1320: {
            items: 3,
          },
        },
      });
    }



    // ===Tab One===
    if ($(".tab-box").length) {
      var $tabButtons = $(".tab-box .tabs-button-box .tab-btn-item");
      var $tabContents = $(".tab-box .tabs-content-box .tab");
      $tabButtons.on("click", function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).hasClass("tab-active")) {
          return false;
        } else {
          $tabButtons.removeClass("active-btn");
          $(this).addClass("active-btn");
          $tabContents.removeClass("tab-active");
          $(target).addClass("tab-active");
        }
      });
    }



    if ($(".marquee_mode").length) {
      $('.marquee_mode').marquee({
        speed: 30,
        gap: 20,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible: true,
      });
    }

    if ($(".marquee_mode-2").length) {
      $('.marquee_mode-2').marquee({
        speed: 30,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible: true,
      });
    }


    //Image Reveal Animation
    if ($(".reveal").length) {
      gsap.registerPlugin(ScrollTrigger);
      let revealContainers = document.querySelectorAll(".reveal");
      revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "play none none none",
          },
        });
        tl.set(container, {
          autoAlpha: 1,
        });
        tl.from(container, 1.5, {
          xPercent: -100,
          ease: Power2.out,
        });
        tl.from(image, 1.5, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
          ease: Power2.out,
        });
      });
    }
    //Progress Count Bar
    if ($(".count-bar").length) {
      $(".count-bar").appear(
        function () {
          var el = $(this);
          var percent = el.data("percent");
          $(el).css("width", percent).addClass("counted");
        }, {
          accY: -50
        }
      );
    }

    //Progress Bar / Levels
    if ($(".progress-levels .progress-box .bar-fill").length) {
      $(".progress-box .bar-fill").each(
        function () {
          $(".progress-box .bar-fill").appear(function () {
            var progressWidth = $(this).attr("data-percent");
            $(this).css("width", progressWidth + "%");
          });
        }, {
          accY: 0
        }
      );
    }

    //Fact Counter + Text Count
    if ($(".count-box").length) {
      $(".count-box").appear(
        function () {
          var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text()
            }).animate({
              countNum: n
            }, {
              duration: r,
              easing: "linear",
              step: function () {
                $t.find(".count-text").text(Math.floor(this.countNum));
              },
              complete: function () {
                $t.find(".count-text").text(this.countNum);
              }
            });
          }
        }, {
          accY: 0
        }
      );
    }



    // Accrodion
    if ($(".accrodion-grp").length) {
      var accrodionGrp = $(".accrodion-grp");
      accrodionGrp.each(function () {
        var accrodionName = $(this).data("grp-name");
        var Self = $(this);
        var accordion = Self.find(".accrodion");
        Self.addClass(accrodionName);
        Self.find(".accrodion .accrodion-content").hide();
        Self.find(".accrodion.active .accrodion-content").show();
        accordion.each(function () {
          $(this)
            .find(".accrodion-title")
            .on("click", function () {
              if ($(this).parent().hasClass("active") === false) {
                var $groupContainer = $(".accrodion-grp." + accrodionName);
                $groupContainer.find(".accrodion").removeClass("active");
                $groupContainer.find(".accrodion-content").slideUp();
                var $parent = $(this).parent();
                $parent.addClass("active");
                $parent.find(".accrodion-content").slideDown();
              }
            });
        });
      });
    }



    $(".contact-form-validated").each(function () {
      $(this).validate({
        rules: {
          name: {
            required: false,
            minlength: 2
          },
          email: {
            required: true,
            email: true
          },
          Phone: {
            required: false,
            minlength: 6
          },
          phone: {
            required: false,
            minlength: 6
          },
          message: {
            required: false,
            minlength: 10
          }
        },
        messages: {
          name: {
            required: "Please enter your name.",
            minlength: "Name must be at least 2 characters."
          },
          email: {
            required: "Please enter your email.",
            email: "Please enter a valid email address."
          },
          Phone: {
            required: "Please enter your phone number.",
            minlength: "Please enter a valid phone number."
          },
          phone: {
            required: "Please enter your phone number.",
            minlength: "Please enter a valid phone number."
          },
          message: {
            required: "Please enter your message.",
            minlength: "Message must be at least 10 characters."
          }
        },
        submitHandler: function (form) {
          var $form = $(form);
          var $submitBtn = $form.find('button[type="submit"], input[type="submit"]');
          var originalBtnText = $submitBtn.val() || $submitBtn.text();
          var loadingText = $submitBtn.data("loading-text") || "Sending...";
          var $result = $form.find(".result");

          $submitBtn.prop("disabled", true).addClass("loading");
          if ($submitBtn.is("button")) $submitBtn.data("original-text", originalBtnText).text(loadingText);
          else if ($submitBtn.is("input")) $submitBtn.data("original-val", originalBtnText).val(loadingText);
          $result.removeClass("success error").text("");

          $.ajax({
            url: $form.attr("action"),
            type: "POST",
            data: $form.serialize(),
            success: function (response) {
              $result.text(response).addClass("success");
              $form.find('input[type="text"], input[type="email"], input[type="tel"], textarea').val("");
            },
            error: function (xhr) {
              var msg = "An error occurred. Please try again later.";
              if (xhr.responseText && xhr.responseText.trim().length > 0) {
                msg = xhr.responseText.trim();
              } else if (xhr.status === 0) {
                msg = "Network error. Please check your connection.";
              } else if (xhr.status >= 500) {
                msg = "Server error. Please try again later.";
              }
              $result.text(msg).addClass("error");
            },
            complete: function () {
              $submitBtn.prop("disabled", false).removeClass("loading");
              if ($submitBtn.is("button")) $submitBtn.text($submitBtn.data("original-text") || originalBtnText);
              else if ($submitBtn.is("input")) $submitBtn.val($submitBtn.data("original-val") || originalBtnText);
            }
          });
          return false;
        }
      });
    });



    if ($(".video-popup").length) {
      $(".video-popup").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
      });
    }

    if ($(".img-popup").length) {
      var groups = {};
      $(".img-popup").each(function () {
        var id = parseInt($(this).attr("data-group"), 10);

        if (!groups[id]) {
          groups[id] = [];
        }

        groups[id].push(this);
      });

      $.each(groups, function () {
        $(this).magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeBtnInside: false,
          gallery: {
            enabled: true
          }
        });
      });
    }



    if ($(".odometer").length) {
      var odo = $(".odometer");
      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    }

    if ($(".dynamic-year").length) {
      let date = new Date();
      $(".dynamic-year").html(date.getFullYear());
    }




    if ($(".tabs-box").length) {
      $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).is(":visible")) {
          return false;
        } else {
          var $parentBox = target.parents(".tabs-box");
          $parentBox.find(".tab-buttons .tab-btn").removeClass("active-btn");
          $(this).addClass("active-btn");
          $parentBox.find(".tabs-content .tab").fadeOut(0).removeClass("active-tab");
          $(target).fadeIn(300).addClass("active-tab");
        }
      });
    }
    if ($(".checkout__payment__title").length) {
      $(".checkout__payment__item").find(".checkout__payment__content").hide();
      $(".checkout__payment__item--active").find(".checkout__payment__content").show();

      $(".checkout__payment__title").on("click", function (e) {
        e.preventDefault();

        $(this)
          .parents(".checkout__payment")
          .find(".checkout__payment__item")
          .removeClass("checkout__payment__item--active");
        $(this).parents(".checkout__payment").find(".checkout__payment__content").slideUp();

        $(this).parent().addClass("checkout__payment__item--active");
        $(this).parent().find(".checkout__payment__content").slideDown();
      });
    }





    // Product All Tab
    if ($(".product__all-tab").length) {
      $(".product__all-tab .tabs-button-box .tab-btn-item").on("click", function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).hasClass("actve-tab")) {
          return false;
        } else {
          $(".product__all-tab .tabs-button-box .tab-btn-item").removeClass("active-btn-item");
          $(this).addClass("active-btn-item");
          $(".product__all-tab .tabs-content-box .tab-content-box-item").removeClass(
            "tab-content-box-item-active"
          );
          $(target).addClass("tab-content-box-item-active");
        }
      });
    }





    if ($("#shop-details-one__thumb").length) {
      let testimonialsThumb = new Swiper("#shop-details-one__thumb", {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 1400,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        autoplay: {
          delay: 5000
        }
      });

      let testimonialsCarousel = new Swiper("#shop-details-one__carousel", {
        observer: true,
        observeParents: true,
        loop: true,
        speed: 1400,
        mousewheel: false,
        slidesPerView: 1,
        autoplay: {
          delay: 5000
        },
        thumbs: {
          swiper: testimonialsThumb
        },
        pagination: {
          el: '#testimonials-one__carousel-pagination',
          type: 'bullets',
          clickable: true
        },

        "navigation": {
          "nextEl": "#product-details__swiper-button-next",
          "prevEl": "#product-details__swiper-button-prev"
        },
      });
    }



    //Related Products Carousel
    if ($(".related-products__carousel").length) {
      $(".related-products__carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 2000,
        navText: [
          '<span class="icon-left-arrow"></span>',
          '<span class="icon-right-arrow"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 3,
          },
          1320: {
            items: 4,
          },
        },
      });
    }
      projectMasonaryLayout();
      title_animation();
      priceFilter();


      if ($(".post-filter").length) {
        var postFilterList = $(".post-filter li");
        var $filterLayout = $(".filter-layout");
        // for first init
        $filterLayout.isotope({
          filter: ".filter-item",
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        // on click filter links
        postFilterList.on("click", function () {
          var Self = $(this);
          var selector = Self.attr("data-filter");
          postFilterList.removeClass("active");
          Self.addClass("active");

          $filterLayout.isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false
            }
          });
          return false;
        });
      }

      if ($(".post-filter.has-dynamic-filter-counter").length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
          "li"
        );

        activeFilterItem.each(function () {
          var filterElement = $(this).data("filter");
          var count = $(".filter-layout").find(filterElement).length;
          $(this).append("<sup>[" + count + "]</sup>");
        });
      }
      $('select:not(.ignore)').niceSelect();

    ScrollTrigger.refresh();
  }

  window.FenaTemplate = { initGlobal: initGlobal, initPage: initPage };
})(jQuery);
