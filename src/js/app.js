$(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".navbar .menu li a").addClass("sticky");
      $("#portfolio span,#portfolio").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
      $(".navbar .menu li a").removeClass("sticky");
      $("#portfolio span,#portfolio").removeClass("sticky");
    }
  });
});
