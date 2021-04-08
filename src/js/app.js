$(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".navbar .menu li a").addClass("sticky");
      $(".navbar .logo a span").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
      $(".navbar .menu li a").removeClass("sticky");
      $(".navbar .logo a span").removeClass("sticky");
    }
  });
});
