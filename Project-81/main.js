
Canvas= document.getElementById ('mycanvas')
ctx= Canvas.getContext("2d");
color = "red" ;
Canvas.getContext("2d").beginPath()
Canvas.getContext("2d").strokeStyle = color ;
Canvas.getcontext("2d").lineWidht = 2 ; 
Canvas.getContext("2d").arc(200 , 200 , 40 , 0 ,2*Math.PI);
Canvas.getcontext("2d").stroke();

ctx.beginPath();
ctx.strokeStyle = color ; 
ctx. lineWidht = 2 ;
ctx.arc (200, 200 , 40 , 0 , 2*Math.PI);
ctx.stroke()
