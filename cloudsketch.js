let numCols = 100, numRows = 100;
let w, h;
let targetX = 0;
let targetY = 0;
let x = 0
let y = 0
let nextTime = 0;
let floatX, floatY;

function setup() {
  let cnv = createCanvas (windowWidth, windowHeight);
  cnv.position (0,0)
  cnv.style ('z-index',-1)
 
  w = width/numCols
  h = height/numRows;
 
floatX = random(0, windowWidth);
  floatY = random(60, windowHeight);
}

function draw() {
 background(173, 216, 230);
  
  push()
   for(let x = 0; x<numCols; x++){ 
     for(let y = 0; y<numRows; y++){
    
      let n = noise (x/15, y/10, frameCount/50)
      let cloudAlpha = map(n, 0.3, 0.7, 0, 255);
       
       
       noStroke()
       fill(255, 255, 255, cloudAlpha);
       rect(w*x, h*y, w, h ) 
  
      // text(x, w*x +10, height/2)
       
     }
  
   }
  
  x = lerp(x, targetX, 0.1)
  y = lerp(y, targetY, 0.1)
  
  line(x, y, mouseX, mouseY);
  
  
  
  

  targetX = mouseX;
  targetY= mouseY;
 let link = document.getElementById("floatLink");
  link.style.left = x + "px";
  link.style.top = y + "px";


  let d = dist(x, y, mouseX, mouseY);

  if(d > 20){
    
    fill(255)
  }
  else{
    
    fill(255, 0,0);
  }
  pop()
push()
textFont('Courier New');
textAlign(CENTER)
textSize(30);
fill(255, 255, 143);
stroke(255, 255, 143)
strokeWeight(2.5);
text('let me be a dreamer, let me____', windowWidth/2, 60);
pop()

textFont('Courier New');
textAlign(CENTER)
textSize(30);
fill(255, 255, 143);
stroke(255, 255, 143);
strokeWeight(2.5);
text('float', floatX, floatY);

  if (millis() > nextTime) {
    floatX = random(0, windowWidth);
    floatY = random(60, windowHeight);

    nextTime = millis() + random(200, 430);
}}