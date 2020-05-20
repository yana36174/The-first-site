$(function(){
    $("#phone").mask("8(999) 999-9999");
    $("#phone2").mask("8(999) 999-9999");
    $('.mobile-button').click(function(event) {
      $('.mobile').toggleClass('open')
      $('.mobile-button').toggleClass('active')
      $('body').toggleClass('is-menu-opened')
    })
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1
})