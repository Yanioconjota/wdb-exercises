$(document).ready(function(){
  $('.menu').hide();
  $('.toggle-menu').bind('click',function(){
    console.log('just clicked');
    $('.menu').toggle(400);
  });
});
