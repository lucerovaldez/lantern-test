// ==================================================
// * Project Name   :  Black Lantern - Cybersecurity Services Company.
// * File           :  JS Base
// * Version        :  1.0.0
// * Developer      : devshagor (https://www.fiverr.com/developershagor/)
// ==================================================
(function($) {
   "use strict";
 
   // Back To Top - Start
   // --------------------------------------------------
   $(".scroll").on('click', function() {
     $("html, body").animate({scrollTop: 0}, 0);
     return false; 
   });
   // Back To Top - End
   // --------------------------------------------------
 
   // Mobile Menu Button Class Chnage - Start
   // --------------------------------------------------
   $(".mobile_menu_btn").on('click', function(){
     $(".mobile_menu_btn > i").toggleClass("active");
   });
   // Mobile Menu Button Class Chnage - End
   // --------------------------------------------------
 
   // Sticky Header - Start
   // --------------------------------------------------
   $(window).on('scroll', function () {
     if ($(this).scrollTop() > 0) {
       $('.site_header').addClass("sticky")
     } else {
       $('.site_header').removeClass("sticky")
     }
   });
   // Sticky Header - End
   // --------------------------------------------------
 
   // Content Visible on Page Scroll - Start
   // --------------------------------------------------
   AOS.init();
   // Content Visible on Page Scroll - End
   // --------------------------------------------------
 
   // Odometer Counter - Start
   // --------------------------------------------------
   jQuery('.odometer').appear(function (e) {
     var odo = jQuery(".odometer");
     odo.each(function () {
       var countNumber = jQuery(this).attr("data-count");
       jQuery(this).html(countNumber);
     });
   });
   // Odometer Counter - End
   // --------------------------------------------------
 
   // Testimonial Blocks Carousel - Start
   // --------------------------------------------------
   const testimonialBlocksCarousel = new Swiper('.testimonial_blocks_carousel', {
     loop: true,
     speed: 900,
     spaceBetween: 24,
     navigation: {
       nextEl: ".tbc_carousel_next",
       prevEl: ".tbc_carousel_prev",
     },
     pagination: {
       el: ".tbc_carousel_pagination",
       clickable: true,
     },
     autoplay: {
       delay: 3000,
       disableOnInteraction: true,
       pauseOnMouseEnter: true,
     },
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       881: {
         slidesPerView: 2,
       },
       1200: {
         slidesPerView: 3,
       },
     },
   });
   // Testimonial Blocks Carousel - End
   // --------------------------------------------------
 
   // Split Text Animation - Start
   // --------------------------------------------------
   let st = $(".split-text");
   if (st.length > 0) {
     gsap.registerPlugin(SplitText);
     st.each(function (index, el) {
       el.split = new SplitText(el, {
         type: "lines,words,chars",
         linesClass: "tp-split-line"
       });
       gsap.set(el, {
         perspective: 400
       });
 
       let charsAnimation = {
         opacity: 0,
       };
 
       if ($(el).hasClass('right')) {
         charsAnimation.x = "50";
       } else if ($(el).hasClass('left')) {
         charsAnimation.x = "-50";
       } else if ($(el).hasClass('up')) {
         charsAnimation.y = "80";
       } else if ($(el).hasClass('down')) {
         charsAnimation.y = "-80";
       }
 
       gsap.set(el.split.chars, charsAnimation);
 
       el.anim = gsap.to(el.split.chars, {
         scrollTrigger: {
           trigger: el,
           start: "top 90%",
         },
         x: "0",
         y: "0",
         rotateX: "0",
         scale: 1,
         opacity: 1,
         duration: 0.4,
         stagger: 0.02,
       });
     });
   }
   // Split Text Animation - End
   // --------------------------------------------------
 
 })(jQuery);