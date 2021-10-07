var btn=document.getElementById('cta');
var btn2=document.getElementById('cta2');

btn.onclick=function(){
  var morphing=anime({
    targets: '.polymorph',
    points: [
      { value:'300,100 0,100 0,0 61,0 75,79'},
      { value:'300,100 0,100 0,0 0,0 111,60'}
    ],
    easing: 'easeOutQuad',
    duration: 1200,
    loop: false
  });
  anime({
    targets:"#blip",
    opacity:1,
    duration:500,
    translateY:150
  })
  var promise=morphing.finished.then(()=>{
    btn2.onclick = function(){
      var morphing=anime({
        targets: '.polymorph',
        points: [
          { value:'300,100 0,100 0,0 61,0 75,79 '},
          { value:'300 100 0 100 0 0 71.98 0 300 0 300 100'}
        ],
        easing: 'easeOutQuad',
        duration: 1200,
        loop: false
      });
      anime({
        targets:"#blip",
        opacity:0,
        duration:500,
        translateY:-800
      })
    };
  })

}
