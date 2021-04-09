$(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar,.navbar .menu li a,#portfolio span,#portfolio").addClass(
        "sticky"
      );
    } else {
      $("#portfolio span,#portfolio,.navbar .menu li a,.navbar").removeClass(
        "sticky"
      );
    }
  });
  $(".menu-btn").click(function () {
    // console.log("here");
    $(".navbar .menu").toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
});
