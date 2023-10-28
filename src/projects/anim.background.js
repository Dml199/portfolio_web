import React ,{useRef,useEffect} from "react";


function Animation() {

  const stars=[];
  const star_arr_size=10;
  const FPS=40;
  var canvasRef=useRef(null);

  
  function distance( point1, point2 ){
    var xs = 0;
    var ys = 0;
   
    xs = point2.x - point1.x;
    xs = xs * xs;
   
    ys = point2.y - point1.y;
    ys = ys * ys;
   
    return Math.sqrt( xs + ys );
  }
  
  function define_star(stars){
  
    for(let i = 0; i<star_arr_size;++i)
    {
      stars.push({
        x:Math.random()*300,
        y:Math.random()*420,
        rad:Math.floor(Math.random()*3+1),
        vx:(Math.random()*20)-10,
        vy:(Math.random()*20)-10
      }
      )
    }
    return stars;
  }
  function draw(stars,ctx){
    
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    ctx.fillStyle="transparent"
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
    
    for(let i = 0; i< stars.length;++i){
    
    ctx.fillStyle="grey";
    ctx.beginPath();
    ctx.arc(stars[i].x,stars[i].y,stars[i].rad,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
  
    
   
  
    //FROM THIS
    ctx.beginPath()
    for(let i = 0 ; i < stars.length;++i) {
      ctx.moveTo(stars[i].x,stars[i].y);
      for(let j = 0 ; j<stars.length;++j){
         if(distance (stars[i],stars[j])<100)
         ctx.lineTo(stars[j].x,stars[j].y);
      }
    }//TO THIS
  
  ctx.strokeStyle="red"
  ctx.lineWidth=0.5;
  ctx.stroke()
  
  }};
   
  
  
  function update() {
    for (let i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];
    
      s.x += s.vx /FPS;
      s.y += s.vy /FPS;
      
      if (s.x < 0 || s.x > 300) s.vx = -s.vx;
      if (s.y < 0 || s.y > 420) s.vy = -s.vy;
    }
  }
  
  
    
  useEffect(()=>
  {
    var canvas=canvasRef.current;

    var ctx= canvas.getContext("2d");

     

    function tick(){
   
      draw(stars,ctx)
      update()
      requestAnimationFrame(tick);
    
    }
    
    define_star(stars)


    
  
    tick()
  },[window.innerWidth,window.innerHeight])
    
  
  
  
    return (
      <div>
      <canvas ref={canvasRef} width="300px" height="420px"/>
      </div>
    );
  }
export default Animation;