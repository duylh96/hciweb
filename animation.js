$("#pick_border").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
    $(this).removeClass("animated")  
  })
  
  $("#pick_border").hover(function(){
    $(this).addClass("animated");        
  })