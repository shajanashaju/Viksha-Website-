
$(document).ready(function() {
  // alert("hi");
    $(".mob-menu").click(function(){
        $('.mob-menu-content').toggleClass("open-menu");
      });

      $(".mob-close").click(function(){
        $('.mob-menu-content').toggleClass("open-menu");
      });
      $(".mob-close img").click(function(){
        $('.mob-close img').toggleClass("rotate");
      });
      $(".mob-menu-content li").click(function(){
        $('.mob-menu-content').toggleClass("open-menu");
      });
});