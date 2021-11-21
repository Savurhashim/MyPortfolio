// fix navbar
$(document).ready(function () {
  $(window).scroll(function () {
    // stikcy navbar on scroll
    if (this.scrollY > 200) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // scroll up button
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // scroll up function
  $(".scroll-up-btn").click(function () {
    $("html,body").animate({ scrollTop: 0 });
    // removeing smooth scroll on click
    $("html").css("scrollBehavior", "auto");
  });

  // applying smooth scroll when clicking menu items
  $(".navbar .menu li a").click(function () {
    $("html").css("scrollBehavior", "smooth");
  });

  //toggle menu
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation

  var typed = new Typed(".typing-1", {
    strings: [
      "Desingner",
      "Front-end Developer",
      "Fullstack developer",
      "Tester",
      "Ui/Ux Designer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typedAbout = new Typed(".typing-2", {
    strings: [
      "Desingner",
      "Front-end Developer",
      "Fullstack developer",
      "Tester",
      "Ui/Ux Designer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // carousel

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
