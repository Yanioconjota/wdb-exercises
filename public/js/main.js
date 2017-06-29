$(document).ready(function(){
  $('.menu').hide();
  $('.toggle-menu').bind('click',function(){
    console.log('just clicked');
    $('.menu').toggle(400);
  });

  var $pre = $('pre');
  for (var i = 0; i < $pre.length; i++) {
    var pattern = $pre[i].innerHTML;
    pattern = pattern.replace(/</g,'&lt;').replace(/>/g,'&gt;');
    console.log(pattern);
    $pre[i].innerHTML = pattern;
  }
});
