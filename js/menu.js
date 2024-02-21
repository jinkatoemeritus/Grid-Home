$(function(){

  $('.mobileNav').click(function(e){
    // if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
      e.preventDefault();

      if($('.nav_wrap').hasClass('mobile_nav_open')){
        $('.nav_wrap').removeClass('mobile_nav_open');
      }else{
        $('.nav_wrap').addClass('mobile_nav_open');
      }
    // }
  });


  $('.account_button').click(function(e){
    // if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
      e.preventDefault();
      if($('.account').hasClass('account_menu_open')){
        $('.account').removeClass('account_menu_open');
      }else{
        $('.account').addClass('account_menu_open');
      }
    // }
  });

});
