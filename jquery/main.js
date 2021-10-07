$(document).ready(function(){
  $("#hide").click(function(){
    $(".one").hide(500);
  });

$("#show").click(function(){
  $(".one").show(800);
});

$("#hs").click(function(){
  $(".two").toggle(1000);
});

});
